module.exports = (asyncFunc) => {
    return (...args) => {
        let result = undefined;
        let done = false
        asyncFunc(...args).then((ret) => { done = true; result = ret })

        require('deasync').loopWhile(() => !done && result === undefined);
        return result
    }
}
