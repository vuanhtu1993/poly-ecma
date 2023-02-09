const asynchronousLog = function(text) {
    const rand = Math.random() * (3000 - 500) + 500;
    setTimeout(function() {
        console.log(text);
    }, rand)
}

asynchronousLog('abc')

export {
    asynchronousLog
}