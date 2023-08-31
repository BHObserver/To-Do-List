import handleUpdateDescription from './updateDescription';
import { updateStatus, clearCompletedTasks } from './statusUpdates';

describe('handleUpdateDescription', () => {
  test('updates task description', () => {
    const mockEvent = { target: { value: 'New description' }, key: 'Enter' };
    const mockTasks = [{ description: 'Task 1' }, { description: 'Task 2' }];
    const mockParentElement = { dataset: { index: '1' } };

    const result = handleUpdateDescription(mockEvent, mockTasks, mockParentElement);

    expect(result.tasks[0].description).toBe('New description');
    expect(result.tasks[1].description).toBe('Task 2');
  });

});

describe('updateStatus', () => {
  test('updates task status', () => {
    // Mock tasks
    const mockTasks = [{ complete: false }, { complete: true }];
    const index = 0;
    const completed = true;

    const result = updateStatus(mockTasks, index, completed);

    expect(result[0].complete).toBe(true);
    expect(result[1].complete).toBe(true);
  });

});

describe('clearCompletedTasks', () => {
  test('filters completed tasks', () => {
    const mockTasks = [
      { description: 'Task 1', complete: true },
      { description: 'Task 2', complete: false },
    ];
    const mockSavedHTML = '<ul><li>...</li></ul>';

    const result = clearCompletedTasks(mockTasks, mockSavedHTML);

    expect(result.newTasks.length).toBe(1);
    expect(result.newTasks[0].description).toBe('Task 2');
  });
});
