import './style.css';

const list = document.querySelector('ul');

const todo = [
    {
        description: 'Shopping',
        completed: false,
        index: 1
    },
    {
        description: 'Breakfast',
        completed: false,
        index: 2
    },
    {
        description: 'Exercise',
        completed: false,
        index: 3
    },
    {
        description: 'Cleaning',
        completed: false,
        index: 4
    },
    {
        description: 'Bath',
        completed: false,
        index: 5
    },
]

todo.forEach( (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input class="done" type="checkbox"> <h4 class='todo-item'> ${item.description} </h4>  <i class="fa fa-ellipsis-v" aria-hidden="true"></i> <span> <i class="fa fa-trash"></i> </span>`;
    /* listItem.innerText = item.description; */
    list.appendChild(listItem);
});