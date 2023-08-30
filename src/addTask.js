import Task from './task';

function addTask(value, tasks) {
  const newTasks = [...tasks, new Task(value, false, tasks.length + 1)];
  return newTasks;
}

module.exports = addTask;
