export const updateStatus = (tasks, index, completed) => {
  const newTasks = [...tasks]; // Create a copy of tasks array
  if (index >= 0 && index < newTasks.length) {
    newTasks[index].complete = completed;
  }
  return newTasks;
};

export const clearCompletedTasks = (tasks, savedHTML) => {
  const newTasks = tasks.filter((task) => !task.complete);
  return { newTasks, savedHTML };
};
