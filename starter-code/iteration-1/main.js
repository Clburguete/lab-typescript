var tasks = [];
function addTask(task) {
    tasks.push(task);
}
function listAllTasks() {
    console.log(tasks);
}
function deleteTask(task) {
    var toRemove = tasks.indexOf(task);
    tasks.splice(toRemove, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
