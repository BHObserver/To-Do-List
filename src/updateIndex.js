export default function updateIndex() {
  const list = document.querySelector('ul');
  const listItem = list.querySelectorAll('li');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 1; i <= listItem.length; i += 1) {
    const idx = i - 1;
    const item = listItem[idx];
    const taskIndex = tasks[idx];
    item.setAttribute('data-index', i);
    taskIndex.index = i;
  }
  const savedHTML = list.innerHTML;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('savedHTML', savedHTML);
}
