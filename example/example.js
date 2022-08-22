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

    // Async function must return right away with the word "Promise"
    console.log(syncSleep('sync'))

    // Sync function must return when done  with the return of function
    console.log(sleep('async'))

    // This line is an example when function is crash you can handle with try...cache
    const syncCrash = deasyncAsync(crash);
    console.log(syncCrash('sync'))
}
catch (error) {
    console.log("Here is error:", error);
}
