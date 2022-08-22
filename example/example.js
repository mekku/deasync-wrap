const deasyncAsync = require('../index')

// Async vertion of sleep function 
async function sleep(note, ms = 100) {
    console.log(a)
    return new Promise(resolve => setTimeout(() => { resolve(note) }, ms));
}

async function crash(note, ms = 100) {
    console.log(a)
    return new Promise(resolve => setTimeout(() => { resolve(note) }, ms));
}

try {
    const syncSleep = deasyncAsync(sleep);

    console.log(syncSleep('sync'))
    console.log(sleep('async'))

    const syncCrash = deasyncAsync(crash);
    console.log(syncCrash('sync'))
}
catch (error) {
    console.log("Here is error:", error);
}
