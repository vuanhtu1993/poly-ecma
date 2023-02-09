const asyncTask = function(text, cb /*Callback*/) {
    const rand = Math.random() * (3000 - 500) + 500
    // Asynchronous function
    setTimeout(function() {
        console.log(text);
        cb()
    }, rand) 
    // setInterval
    // fetch
}

export {
    asyncTask 
}