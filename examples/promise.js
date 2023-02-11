const asyncTask = function(text) {
    const rand = Math.random() * (3000 - 500) + 500
    // Asynchronous function
    return new Promise(function(resolve, reject) {
        // Async
        setTimeout(function() {
            // console.log(`${text} - ${Math.round(rand)}ms`);
            resolve(`${text} - ${Math.round(rand)}ms`)
        }, rand)
    })
}

// Consumer
asyncTask("task1")
.then(function(response) {
    console.log(response);
    return asyncTask("task2")
})
.then(function(response) {
    console.log(response);
    return asyncTask("task3")
})
.then(function(response) {
    console.log(response);
})
// // class
// // Producer
// const promise = new Promise(function(resolve, reject) {
//     // resolve - Hoàn thành
//     // reject - Thất bại
//     setTimeout(function() {
//         resolve("Hoàn thành")
//     }, 3000)
// })

// console.log(promise);
// // Consumer
// promise.then(function(response) {
//     console.log(response);
// })
// window.promise = promise