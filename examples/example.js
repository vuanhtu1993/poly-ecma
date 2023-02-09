import { asyncTask } from "./asynchronous";

// Synchronous
const task1 = function() {
    console.log("1");
}

// const task2 = function() {
//     asyncTask("2")
// }

const task3 = function() {
    console.log("3");
}

const task4 = function() {
    console.log("4");
}

// Chưa xử lý bất đồng bộ
task1()
// Task2
asyncTask('2', function() {
    task3()
    task4()
})