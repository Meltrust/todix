/* eslint-disable max-classes-per-file */

class BrowserSave {
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

class Completion {
  static completeToggle = (arr, id) => {
    const item = arr.find((task) => task.id === id);
    if (item) {
      item.completed = !item.completed;
    }
  }
}

export { Completion, BrowserSave };
