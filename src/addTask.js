import Task from './task';

export default function addTask(value, tasks) {
  const newTasks = [...tasks, new Task(value, false, tasks.length + 1)];
  return newTasks;
}