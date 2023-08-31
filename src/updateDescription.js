const handleUpdateDescription = (event, tasks, parentElement) => {
  const clickedElement = event.target;
  let updatedTasks = [...tasks];
  if (event.key === 'Enter') {
    const updatedDescription = clickedElement.value;
    const index = parseInt(parentElement.dataset.index, 10);
    updatedTasks = [...updatedTasks];
    updatedTasks[index - 1].description = updatedDescription;
  }

  return { tasks: updatedTasks };
};

export default handleUpdateDescription;
