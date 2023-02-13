// const promise = new Promise(function(resolve, reject) {
//     const status = false
//     setTimeout(function() {
//         if(status) {
//             resolve({
//                 code: 200,
//                 result: "Em da doi anh"
//             })
//         } else {
//             const error = new Error("Vi anh chua giau")
//             reject(error)
//         }
//     }, 2000)
// })

// console.log(promise);

// // Consumer
// promise
// .then(function(res) {
//     console.log(res);
// })
// .catch(function(error) {
//     console.log(error);
// })

// window.promise = promise

const asyncFunc = function(text) {
    const rand = Math.random() * (3000 + 500) - 500
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error(`${text} - ${Math.round(rand)}ms`))
        }, rand)  //3s
    })
    
}

// Promise chain
asyncFunc("task1")
.then(function(res) {
    console.log(res);
    return asyncFunc("task2")
})
.then(function(res) {
    console.log(res);
})
.catch(function(error) {
    console.log(error);
})