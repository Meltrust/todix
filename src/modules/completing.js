export default class Completion {
  static completeToggle = (arr, id) => {
    const item = arr.find((task) => task.id === id);
    if (item) {
      item.completed = !item.completed;
    }
  }
}
