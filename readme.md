# deasync-wrap

Wrapping a function to convert it from async to sync with deasync package that implemented with a blocking mechanism by calling Node.js event loop at JavaScript layer. The core of deasync is written in C++.


    // Async vertion of sleep function 
    async function sleep(note, ms = 2000) {
        return new Promise(resolve => setTimeout(() => { resolve(note) }, ms));
    }

    async function crash(note, ms = 2000) {
        console.log(notExistingVar)
        return new Promise(resolve => setTimeout(() => { resolve(note) }, ms));
    }

    try {
        const syncSleep = deasyncAsync(sleep);
        const syncSleepWithTimeout = deasyncAsync(sleep, 1000);

        // Async function must return right away with the word "Promise"
        console.log(sleep('async'))

        // Sync function must return when done  with the return of function
        console.log(syncSleep('sync'))
        // The return timeout can be set. After timeout, an error will be generated, but the function will continue to operate.
        console.log(syncSleepWithTimeout('sync'))
    }
    catch (error) {
        // Error: sleep function is timeout
        console.log("Here is error:", error);
    }

    try {
        // When function is crash you can handle with try...cache
        const syncCrash = deasyncAsync(crash);
        console.log(syncCrash('sync'))
    }
    catch (error) {
        // ReferenceError: notExistingVar is not defined
        console.log(error);
    }

