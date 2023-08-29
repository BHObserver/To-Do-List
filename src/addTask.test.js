import addTask from './addTask';
import Task from './task';

describe('addTask function', () => {
  it('should add a new task to the tasks array', () => {
    const tasks = [new Task('Task 1', false, 1)];
    const value = 'New Task';
    const newTasks = addTask(value, tasks);

    expect(newTasks.length).toBe(tasks.length + 1);
    expect(newTasks[newTasks.length - 1].description).toBe(value);
  });
});
