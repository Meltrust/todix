import './style.css';

function displayTasks(tasks) {
  tasks.forEach((task) => {
    const mainList = document.getElementById('mainList');
    const row = document.createElement('li');
    const check = document.createElement('input');
    const dots = document.createElement('span');
    const text = document.createElement('p');

    check.setAttribute('type', 'checkbox');
    check.classList.add('form-check-input', 'me-2');
    text.textContent = task.description;
    text.classList.add('list-items-text');
    dots.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    row.append(check, text, dots);
    row.id = task.index;
    mainList.appendChild(row);
  });
}

const tasks = [
  {
    description: 'Excersice',
    completed: false,
    index: 1,
  },
  {
    description: 'Yoga',
    completed: false,
    index: 2,
  },
  {
    description: 'Walk the dog',
    completed: false,
    index: 3,
  },
];

window.addEventListener('load', displayTasks(tasks));
