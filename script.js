class UI {
    static addNewTask() {
        const newTask = document.querySelector('#task-message');
        if(newTask.value === '') {
            UI.raiseAlert('Please! Enter a Task First...', 'alert alert-danger text-center')
        } else {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.appendChild(document.createTextNode(newTask.value));
    
            const span = document.createElement('span');
            span.className = 'float-end d-flex gap-3 pt-1';

            const aCheck = document.createElement('a');
            aCheck.href = '#';
            aCheck.className = 'text-success';
            aCheck.innerHTML = `<i id="task-check" class="far fa-check-circle"></i>`;

            const aEdit = document.createElement('a');
            aEdit.href = '#';
            aEdit.innerHTML = `<i id="task-edit" class="far fa-edit"></i>`;
    
            const aDelete = document.createElement('a');
            aDelete.href = '#';
            aDelete.className = 'text-danger';
            aDelete.innerHTML = `<i id="task-delete" class="far fa-times-circle"></i>`;
            
            span.appendChild(aCheck);
            span.appendChild(aEdit);
            span.appendChild(aDelete);
            
            li.appendChild(span);
            
            WorkLogic.attachListeners(aCheck, aEdit, aDelete);

            document.querySelector('.list-group').appendChild(li);
            UI.raiseAlert('Task added', 'alert alert-success text-center');
            newTask.value = '';
        };
    };

    static clearTaskList() {
        document.querySelector('.list-group').innerHTML = '';
    };

    static raiseAlert(message, className) {
        const p = document.createElement('p');
        p.className = className;
        p.appendChild(document.createTextNode(message));
        document.querySelector('.alert-message').appendChild(p);
        setTimeout(() => document.querySelector('.alert-message').innerHTML = '', 1000);
    };
};

class WorkLogic {
    static attachListeners(aCheck, aEdit, aDelete) {
        aCheck.addEventListener('click', (e) => {
            if(e.target.classList.contains('far')) {
                e.target.parentElement.parentElement.parentElement.style.textDecoration = 'line-through';
                e.target.parentElement.parentElement.parentElement.style.opacity = '0.5';
                UI.raiseAlert('Task Completed', 'alert alert-info text-center');
            };
        });

        aEdit.addEventListener('click', (e) => {
            if(e.target.classList.contains('far')) {
                document.querySelector('#update-task').className += 'visible';
            };
        });

        aDelete.addEventListener('click', (e) => {
            if(e.target.classList.contains('far')) {
                e.target.parentElement.parentElement.parentElement.remove();
                UI.raiseAlert('Task Deleted', 'alert alert-danger text-center');
            };
        });
    };
};

const loadAllEventListeners = () => {
    document.querySelector('#add-task').addEventListener('click', UI.addNewTask);
    document.querySelector('#clear-tasks').addEventListener('click', UI.clearTaskList);
};

loadAllEventListeners();