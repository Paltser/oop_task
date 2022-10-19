class UI {
    addTask(task) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task.name));
        li.className = 'collection-item' ;
        const link = document.createElement('a');
        link.appendChild(document.createTextNode('X'));
        link.className = 'align: right'
        link.setAttribute('href', '#');
        li.appendChild(link);
        // add to list
        const list = document.querySelector('ul');
        list.appendChild(li)
        const input = document.querySelector('#task');
        input.value = '';
        task.addedToUI();
    }
    deleteTask(task) {
        const deleteIcon = task.nextSibling;
        if (deleteIcon.textContent === 'X'){
            if (confirm("u sure u wanna delete this task?")){
                task.parentElement.remove();
            }
        }
    }
    deleteTasks(tasks){
        while (tasks.firstChild){
            tasks.removeChild(tasks.firstChild);
        }
    }
}