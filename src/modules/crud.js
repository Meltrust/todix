import BrowserSave from './storing.js';
import displayTasks from './rendering.js';

export default class Task {
  constructor(arr, text) {
    this.id = arr.length + 1;
    this.description = text;
    this.completed = false;
  }

  static addTaskUI(arr) {
    const text = document.getElementById('taskDesc').value;

    arr.push(new Task(arr, text));
    BrowserSave.addTasks(arr);
    displayTasks(arr);
    document.getElementById('taskDesc').value = '';
  }

  static updateTask(arr, id, value) {
    const bullet = arr.find((task) => task.id === id);
    if (bullet) {
      bullet.description = value;
    }
  }

  static deleteTask(lst, index) {
    lst.splice(index, 1);
  }
}
