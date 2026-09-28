const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const root = path.resolve(__dirname, '../..');
function files(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
        const file = path.join(dir, entry.name);
        return entry.isDirectory() ? files(file) : [file];
    });
}
function courses(language) {
    const file = path.join(root, `frontend/src/data/${language}/courses.ts`);
    const context = { exports: {} };
    vm.runInNewContext(ts.transpileModule(fs.readFileSync(file, 'utf8'), {
        compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText, context);
    return context.exports.COURSES ?? context.exports.COURSES_EN;
}
function content(language, name) {
    return require(`../dist/content/${language}/${name}`);
}

for (const language of ['fr', 'en']) {
    test(`${language} content and curriculum dependencies stay inside their package or neutral types`, () => {
        for (const relative of [`backend/src/content/${language}`, `frontend/src/data/${language}`]) {
            const dir = path.join(root, relative);
            for (const file of files(dir).filter(file => file.endsWith('.ts'))) {
                const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
                function inspect(node) {
                    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier) {
                        const specifier = node.moduleSpecifier.text;
                        assert(specifier.startsWith('.'), `${file}: external dependency ${specifier}`);
                        const target = path.resolve(path.dirname(file), specifier);
                        const own = target.startsWith(dir + path.sep);
                        const neutral = target.startsWith(path.join(root, 'backend/src/types') + path.sep)
                            || target === path.join(root, 'frontend/src/data/courseTypes');
                        const typeOnly = ts.isImportDeclaration(node) ? node.importClause?.isTypeOnly : node.isTypeOnly;
                        assert(own || (neutral && typeOnly), `${file}: forbidden dependency ${specifier}`);
                    }
                    // Data files must not bypass the static import boundary.
                    if (ts.isCallExpression(node)) {
                        assert(node.expression.kind !== ts.SyntaxKind.ImportKeyword, `${file}: dynamic import`);
                        assert(!['require', 'eval', 'Function'].includes(node.expression.getText(source)), `${file}: dynamic dependency`);
                    }
                    ts.forEachChild(node, inspect);
                }
                inspect(source);
            }
        }
    });

    test(`${language} curriculum references have no new gaps and reading vocabulary is local`, () => {
        const vocabulary = Object.values(content(language, 'vocabulary'))[0];
        const modules = Object.values(content(language, 'modules'))[0];
        const grammar = Object.values(content(language, 'grammar'))[0];
        const phrases = Object.values(content(language, 'phrases'))[0];
        const reading = Object.values(content(language, 'reading'))[0];
        const verbs = content(language, 'verbs');
        const verbById = verbs.verbById ?? verbs.verbByIdEN;
        const helpers = verbs.helperVerbsDataFR ?? verbs.helperVerbsDataEN;
        const missing = [];
        for (const course of courses(language)) {
            for (const step of course.steps) {
                const id = step.contentId;
                const found = {
                    vocabulary: vocabulary[id] && modules.some(module => module.id === id),
                    grammar: grammar.some(lesson => lesson.id === id),
                    phrases: phrases.some(category => category.id === id),
                    reading: reading.some(passage => passage.moduleId === id),
                    verbs: verbById[id] || helpers[id],
                }[step.type];
                if (!found) missing.push(`${course.level}/${step.id}: ${step.type} ${id}`);
            }
        }
        assert.deepEqual(missing, []);
        for (const passage of reading) {
            assert(vocabulary[passage.moduleId]?.length, `${language}: missing reading vocabulary ${passage.moduleId}`);
        }
    });
}

test('editing English vocabulary, module labels or phrases cannot mutate French content', () => {
    for (const name of ['vocabulary', 'modules', 'phrases']) {
        const fr = Object.values(content('fr', name))[0];
        const en = Object.values(content('en', name))[0];
        const before = JSON.stringify(fr);
        const entry = name === 'vocabulary' ? en['greetings-basics'][0] : en[0];
        const field = name === 'vocabulary' ? 'english' : 'title';
        const previous = entry[field];
        try {
            entry[field] = 'Independent English edit';
            assert.equal(JSON.stringify(fr), before, name);
        } finally {
            entry[field] = previous;
        }
    }
});
