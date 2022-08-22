# deasync-wrap

Wrapping a function to convert it from async to sync with deasync package that implemented with a blocking mechanism by calling Node.js event loop at JavaScript layer. The core of deasync is written in C++.


    const deasyncWrap = require('deasync-wrap')
    
    function sleep(note, ms = 100) {
        return new Promise(resolve => setTimeout(() => { resolve(note) }, ms));
    }

    const syncsleep = deasyncWrap(sleep);

    (async () => {
        sleep('async') // Return promise
        syncsleep('sync') // Return 'sync'
    })()
