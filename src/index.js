import './style.css';
import BrowserSave from './modules/storing.js';
import Completion from './modules/completing.js';
import Task from './modules/crud.js';
import displayTasks from './modules/rendering.js';

let tasks = BrowserSave.allTasks();

window.addEventListener('load', displayTasks(tasks));

const mainForm = document.querySelector('#tasksForm');
mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Task.addTaskUI(tasks);
});

const tasksUl = document.querySelector('#mainList');
tasksUl.addEventListener('change', (e) => {
  if (e.target.classList.contains('status')) {
    const { id } = e.target.parentElement;
    const taskBody = document.getElementById(`task-${id}`);
    Completion.completeToggle(tasks, parseInt(id, 10));
    BrowserSave.addTasks(tasks);
    taskBody.classList.toggle('completed');
  }
});

const inputs = Array.from(document.querySelectorAll('.todo'));
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const id = parseInt(e.target.parentElement.id, 10);
    const { value } = e.target;
    Task.updateTask(tasks, id, value);
    BrowserSave.addTasks(tasks);
  });
});

function resetAllButton() {
  tasks = [];
  BrowserSave.addTasks(tasks);
  displayTasks(tasks);
}

const cl = document.getElementById('resetButton');
cl.addEventListener('click', resetAllButton);
