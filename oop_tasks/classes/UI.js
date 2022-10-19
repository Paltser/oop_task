class UI {
    addTask(task) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task.name));
        li.className = 'collection-item' ;
        const link = document.createElement('a');
        link.appendChild(document.createTextNode('X'));
        link.setAttribute('href', '#');
        li.appendChild(link);
        // add to list
        const list = document.querySelector('ul');
        list.appendChild(li)
        const input = document.querySelector('#task');
        input.value = '';
        task.addedToUI();
    }
}