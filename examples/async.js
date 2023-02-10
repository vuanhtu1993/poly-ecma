// Sync
// console.log("task1");
// // console.log("task2");
// alert("task2")
// console.log("task3");
// console.log("task4");

// Async
// setTimeout
function asyncFunc(text, time) {
    setTimeout(function() {
        console.log(text);
    }, time) // 1s
}

console.log("task1");
asyncFunc("task2", 0)
// alert("task phat sinh")
console.log("task3");
console.log("task4");