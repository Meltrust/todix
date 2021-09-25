/* eslint-disable no-restricted-globals */
import './style.css';
import BrowserSave from './modules/storing.js';
import Completion from './modules/completing.js';
import Task from './modules/crud.js';
import displayTasks from './modules/rendering.js';

let tasks = BrowserSave.allTasks();

window.addEventListener('load', displayTasks(tasks));

// Adding tasks in main form
const mainForm = document.querySelector('#tasksForm');
mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Task.addTaskUI(tasks);
  location.reload();
});

// Toggle completion
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

// Editing tasks
const inputs = Array.from(document.querySelectorAll('.todo'));
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const id = parseInt(e.target.parentElement.id, 10);
    const { value } = e.target;
    Task.updateTask(tasks, id, value);
    BrowserSave.addTasks(tasks);
  });
});

// Delete a task
const listContainer = document.getElementById('mainList');
listContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-alt')) {
    const index = parseInt(e.target.parentElement.parentElement.id, 10);
    Task.deleteTask(tasks, index - 1);
    Task.updateId(tasks);
  }
});

// Delete completed tasks
const clearBtn = document.querySelector('.clear-button');
clearBtn.addEventListener('click', () => {
  tasks = tasks.filter((bullet) => !bullet.completed);
  Task.updateId(tasks);
  BrowserSave.addTasks(tasks);
  displayTasks(tasks);
});

// Reset button
const cl = document.getElementById('resetButton');
cl.addEventListener('click', () => {
  tasks = [];
  BrowserSave.addTasks(tasks);
  displayTasks(tasks);
});
