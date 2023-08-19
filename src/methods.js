const tasks = [];
const index = 0;
class Task {
    constructor (description, complete, index) {
        this.description = description;
        this.complete = complete;
        this.index = index;
    }
}

const addTask = () => {
    const input = document.querySelector('input').value;
    tasks.push(new Task(input, false, index++))
}