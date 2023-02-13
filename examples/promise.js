const promise = new Promise(function(resolve, reject) {
    const status = false
    setTimeout(function() {
        if(status) {
            resolve({
                code: 200,
                result: "Em da doi anh"
            })
        } else {
            const error = new Error("Vi anh chua giau")
            reject(error)
        }
    }, 2000)
})

console.log(promise);

// Consumer
promise
.then(function(res) {
    console.log(res);
})
.catch(function(error) {
    console.log(error);
})

window.promise = promise