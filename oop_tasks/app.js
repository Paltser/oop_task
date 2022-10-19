ui = new UI();
ls = new LS();

//event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');
taskList.addEventListener("click", deleteTask);

//events
//form submit event
form.addEventListener("submit", addTask);

function addTask(e) {
    const task = new Task(taskInput.value);
    ui.addTask(task);
    ls.addTask(task);
    e.preventDefault();
}
function deleteTask(e) {
    let task = e.target.parentElement.firstChild;
    ui.deleteTask(task);
    task = task.textContent;
    ls.deleteTask(task);
}