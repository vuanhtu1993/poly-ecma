const asynchronousLog = function (text) {
    const rand = Math.random() * (3000 - 500) + 500;
    setTimeout(function () {
        console.log(text);
    }, rand)
}

const asyncFunc = function (text) {
    const rand = Math.random() * (3000 - 500) + 500;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(text + "-" + Math.round(rand) + "ms")
        }, rand)
    })
}

const task1 = asyncFunc("task1")
const task2 = asyncFunc("task2")
const task3 = asyncFunc("task3")
const task4 = asyncFunc("task4")

const test = task1.then(function (data) {
    console.log(data);
    return task2
})
console.log(test);

window.test = test