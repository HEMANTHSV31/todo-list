document.getElementById('addtask').addEventListener('click', function() {
    let taskInput = document.getElementById('inputtask');
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!",200);
        return;
    }

    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('task-checkbox');
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-task');

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    document.getElementById('task').appendChild(li);

    taskInput.value = '';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskSpan.classList.add('checked');
        } else {
            taskSpan.classList.remove('checked');
        }
    });

    deleteButton.addEventListener('click', function() {
        li.remove();
    });
});
