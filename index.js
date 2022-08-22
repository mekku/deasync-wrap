module.exports = (asyncFunc) => {
    return (...args) => {
        let result = undefined;
        let resultError = undefined;
        let done = false
        asyncFunc(...args).then((ret) => { done = true; result = ret }).catch(error => { done = true; resultError = error })

        require('deasync').loopWhile(() => !done && result === undefined);
        if (resultError) throw resultError
        return result
    }
}
