// Synchronous
// console.log("task1");
// // console.log("task2");
// alert('task2')
// console.log("task3");
// console.log("task4");

// Asynchronous
// setTimeout


const asyncFunc = function(text, time, callback) {
    setTimeout(function() {
        console.log(text);
        if(callback) {
            callback()
        }
    }, time)  //3s
}

asyncFunc("task1", 500, function() {
    asyncFunc("task2", 300, function() {
        asyncFunc("task3", 600, function() {
            asyncFunc("task3", 600, function() {
                asyncFunc("task3", 600, function() {
                    asyncFunc("task3", 600, function() {
                        asyncFunc("task3", 600, function() {
            
                        })
                    })
                })
            })
        })
    })
})
