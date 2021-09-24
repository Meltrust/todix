export default class BrowserSave {
  static addTasks(list) {
    localStorage.setItem('todoList', JSON.stringify(list));
  }

  static allTasks() {
    let tasks;
    if (localStorage.getItem('todoList') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('todoList'));
    }
    return tasks;
  }
}
