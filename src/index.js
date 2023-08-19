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
