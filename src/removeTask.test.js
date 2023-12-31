import removeTask from './removeTask.js';
import Task from './task.js';

describe('removeTask function', () => {
  it('should remove a task from the tasks array', () => {
    const tasks = [new Task('Task 1', false, 1), new Task('Task 2', false, 2)];
    const parentElement = { dataset: { index: 1 } };
    const newTasks = removeTask(parentElement, tasks);

    expect(newTasks.length).toBe(tasks.length - 1);
    expect(newTasks[0].description).toBe('Task 2');
  });
});
