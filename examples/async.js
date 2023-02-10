// Synchronous
// console.log("task1");
// // console.log("task2");
// alert('task2')
// console.log("task3");
// console.log("task4");

// Asynchronous
// setTimeout


const asyncFunc = function(text, time) {
    setTimeout(function() {
        console.log(text);
    }, time)  //3s
}

// asyncFunc("task1", 3000)
// asyncFunc("task2", 500)
// asyncFunc("task3", 800)
// asyncFunc("task4", 1000)
// Sync
console.log("task1");
asyncFunc("task2", 500)
console.log("task3");
console.log("task4");