const asyncTask = function(text, callback) {
    const rand = Math.random() * (3000 - 500) + 500
    // Asynchronous function
    setTimeout(function() {
        console.log(`${text} - ${Math.round(rand)}ms`);
        if(callback) {
            callback()
        }
    }, rand)
}

asyncTask("task1", function() {
    //callback
    asyncTask("task2", function() {
        asyncTask("task3", function() {
            asyncTask("task4")
            // ...asyncTask
            // Callback hell
        })
    })
})

// [1,2,3].map(function() {

// })