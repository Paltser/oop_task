ui = new UI();
ls = new LS();

//event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

//events
//form submit event
form.addEventListener("submit", addTask);

function addTask(e) {
    const task = new Task(taskInput.value);
    ui.addTask(task);
    ls.addTask(task);
    e.preventDefault();
}