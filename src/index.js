import './style.css';
import * as module from './modules/classes.js';

class Task {
  constructor(arr, text) {
    this.id = arr.length + 1;
    this.description = text;
    this.completed = false;
  }
}

let tasks = module.BrowserSave.allTasks();

function displayTasks(arr) {
  const mainList = document.getElementById('mainList');
  mainList.innerHTML = '';
  if (arr.length === 0) {
    const container = document.getElementById('mainList');
    const stateTracker = document.createElement('div');
    stateTracker.classList.add('empty');
    container.appendChild(stateTracker);
  } else {
    arr.forEach((task, index) => {
      const mainList = document.getElementById('mainList');
      const row = document.createElement('li');
      const check = document.createElement('input');
      const dots = document.createElement('span');
      const text = document.createElement('p');

      check.setAttribute('type', 'checkbox');
      check.classList.add('state', 'form-check-input', 'me-2');
      check.checked = task.completed;
      text.textContent = task.description;
      text.classList.add('list-items-text');
      dots.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
      row.append(check, text, dots);
      row.id = index + 1;
      mainList.appendChild(row);
    });
  }
}

window.addEventListener('load', displayTasks(tasks));

function addTaskUI() {
  const text = document.getElementById('taskDesc').value;

  tasks.push(new Task(tasks, text));
  module.BrowserSave.addTasks(tasks);
  displayTasks(tasks);
  document.getElementById('taskDesc').value = '';
}

const mainForm = document.querySelector('#tasksForm');
mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTaskUI();
});

const tasksUl = document.querySelector('#mainList');
tasksUl.addEventListener('change', (e) => {
  if (e.target.classList.contains('state')) {
    const { id } = e.target.parentElement;
    module.Completion.completeToggle(tasks, parseInt(id, 10));
    module.BrowserSave.addTasks(tasks);
    displayTasks(tasks);
  }
});

function resetAllButton() {
  tasks = [];
  localStorage.setItem('todoList', JSON.stringify([]));
  displayTasks(tasks);
}

const cl = document.getElementById('resetAll');
cl.addEventListener('click', resetAllButton);
