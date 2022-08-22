module.exports = (asyncFunc, timeoutInMillisec = null, tick = 100) => {
    const STAGE = { INIT: 0, RESOLVE: 1, REJECT: 2 }
    return (...args) => {
        let result = undefined;
        let processStage = STAGE.INIT;
        asyncFunc(...args)
            .then((ret) => { processStage = STAGE.RESOLVE; result = ret }).
            catch(error => { processStage = STAGE.REJECT; result = error })

        const waitUntil = new Date(new Date().getTime() + timeoutInMillisec)

        if (timeoutInMillisec == null) {
            require('deasync').loopWhile(() => processStage == STAGE.INIT);
        }
        else {
            while (processStage == STAGE.INIT && waitUntil > new Date()) require('deasync').sleep(tick)
        }

        if (processStage == STAGE.INIT) throw new Error(`${asyncFunc.name} function is timeout`)

        if (processStage == STAGE.REJECT) throw result
        return result
    }
}
