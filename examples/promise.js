// const promise = new Promise(function(resolve, reject) {
//     const status = false
//     setTimeout(function() {
//         if (status) {
//             resolve("Thành công")
//         } else {
//             reject("Thất bại")
//         }
//     }, 1000)
// })

// console.log(promise, "promise");

// // Consumer
// promise
// .then(function(res) {
//     console.log(res);
// })
// .catch(function(error) {
//     console.error(error)
// })

// window.promise = promise

function asyncFunc(text) {
    const status = false
    const rand = Math.random() * (3000 + 500) - 500
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (status) {
                resolve(`${text} - ${rand}ms`)
            } else {
                const error = new Error("Lỗi gì đó")
                reject(error + `${text} - ${rand}ms`)
            }
        }, rand) // 1s
    })   
}

asyncFunc("Task1")
.then(function(res) {
    console.log(res);
    return asyncFunc("task2")
})
.then(function(res) {
    console.log(res);
})
.then(function(res) {
    console.log(res);
})
.then(function(res) {
    console.log(res);
})
.then(function(res) {
    console.log(res);
})
.then(function(res) {
    console.log(res);
})
.then(function(res) {
    console.log(res);
})
.catch(function(error) {
    console.log(error);
})