const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createWritingUsage } = require('../dist/services/writing/usage');
const reserve = (usage, text='Bonjour', visitor='127.0.0.1', feedback='en') => usage.reserveWriting(visitor,'fr','lesson',text,feedback);
const result = {review:{rating:5},model:'test',inputTokens:10,outputTokens:20};
test('guest duplicate reuses completed feedback and concurrent duplicate is blocked',async()=>{
    const usage=createWritingUsage(); const first=await reserve(usage);
    await assert.rejects(reserve(usage),e=>e.code==='already_processing');
    await usage.finishWriting(first.id,result);
    assert.deepEqual(await reserve(usage),{cached:result.review});
});
test('cache is separate by guest address, text and feedback language',async()=>{
    const usage=createWritingUsage(); const first=await reserve(usage);
    await usage.finishWriting(first.id,result);
    for(const args of [['Salut'],['Bonjour','other'],['Bonjour','127.0.0.1','fr']]) assert((await reserve(usage,...args)).id);
});
test('stale pending and failed submissions can retry without resetting allowances',async()=>{
    let now=Date.UTC(2026,9,13);const usage=createWritingUsage(()=>now);
    const first=await reserve(usage);now+=120001;
    const second=await reserve(usage);assert.notEqual(first.id,second.id);
    await usage.finishWriting(first.id,result); // stale request cannot overwrite its newer reservation
    await assert.rejects(reserve(usage),e=>e.code==='already_processing');
    await usage.failWriting(second.id);assert((await reserve(usage)).id);
});
test('guest daily and global caps admit requests atomically and reset with UTC periods',async()=>{
    const keys=['WRITING_DAILY_LIMIT','WRITING_MONTHLY_LIMIT','WRITING_GLOBAL_MONTHLY_LIMIT'];
    const previous=keys.map(k=>process.env[k]);
    process.env.WRITING_DAILY_LIMIT='2';process.env.WRITING_MONTHLY_LIMIT='3';process.env.WRITING_GLOBAL_MONTHLY_LIMIT='4';
    try {
        let now=Date.UTC(2026,9,13);const usage=createWritingUsage(()=>now);
        await Promise.all([reserve(usage,'a'),reserve(usage,'b')]);
        await assert.rejects(reserve(usage,'c'),e=>e.code==='usage_limit');
        now+=86400000;await reserve(usage,'c');
        await assert.rejects(reserve(usage,'d'),e=>e.code==='usage_limit');
        await reserve(usage,'e','other');
        await assert.rejects(reserve(usage,'f','third'),e=>e.code==='service_limit');
        now=Date.UTC(2026,10,1);assert((await reserve(usage,'d')).id);
        process.env.WRITING_GLOBAL_MONTHLY_LIMIT='0';
        await assert.rejects(reserve(usage,'new'),e=>e.code==='service_limit');
    } finally {keys.forEach((k,i)=>{if(previous[i]===undefined)delete process.env[k];else process.env[k]=previous[i];});}
});
