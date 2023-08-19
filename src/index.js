import './style.css';

const list = document.querySelector('ul');
const input = document.querySelector('input');

const tasks = [];
class Task {
    constructor (description, complete, index) {
        this.description = description;
        this.complete = complete;
        this.index = index;
    }
}

const addTask = () => {
    const value = input.value;
    tasks.push(new Task(value, false, tasks.length + 1))
}

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        addTask();
        
        console.log('it worked', tasks);
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input class="done" type="checkbox"> <input class='todo-item' type="text" value="${input.value}" />  <i class="fa fa-ellipsis-v" aria-hidden="true"></i> <span> <i class="fa fa-trash"></i> </span>`;
        list.appendChild(listItem);
        input.value = '';
    }
})




/* tasks.forEach( (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input class="done" type="checkbox"> <h4 class='todo-item'> ${item.description} </h4>  <i class="fa fa-ellipsis-v" aria-hidden="true"></i> <span> <i class="fa fa-trash"></i> </span>`;
    list.appendChild(listItem);
}); */

/* window.addEventListener('load', () => {
    const option = document.querySelectorAll('.fa-ellipsis-v');
    const span = document.querySelectorAll('span');
    console.log(option);
    option.forEach( (element) => {
        element.addEventListener('click', () => {
            element.style.display = 'none';
            span.style.display = 'inline-block';
            element.parentElement.style.gridTemplateColumns = '20px 350px 10px';
            console.log('hoeljwoef')
        })
    });
}) */
