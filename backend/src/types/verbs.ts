export interface ConjugationRow {
    sujet: string;
    present: string;
    passeCompose: string;
    imparfait: string;
    futurSimple: string;
    conditionnelPresent?: string;
    subjonctifPresent?: string;
    plusQueParfait?: string;
    futurAnterieur?: string;
    conditionnelPasse?: string;
    subjonctifPasse?: string;
    passeSimple?: string;
    subjonctifImparfait?: string;
    subjonctifPlusQueParfait?: string;
    passeAnterieur?: string;
}

export interface HelperVerbFR {
    title: string;
    translation: string;
    color: string;
    rows: ConjugationRow[];
}

export interface HelperVerbEN extends HelperVerbFR {
    columns: readonly [string, string, string, string];
}

export interface VerbEntry {
    id: string;
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    rows: ConjugationRow[];
}

export interface VerbGroup {
    id: string;
    title: string;
    titleFR: string;
    description: string;
    descriptionFR: string;
    icon: string;
    color: string;
}
