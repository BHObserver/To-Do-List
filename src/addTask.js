import Task from './task.js';

function addTask(value, tasks) {
  const newTasks = [...tasks, new Task(value, false, tasks.length + 1)];
  return newTasks;
}

export default addTask;
