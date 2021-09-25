export default function displayTasks(arr) {
  const list = document.getElementById('mainList');
  list.innerHTML = '';
  if (arr.length === 0) {
    const emptyState = document.getElementById('mainList');
    const str = `<div class="emptyState"> 
    </div>`;
    emptyState.insertAdjacentHTML('afterbegin', str);
  } else {
    arr.forEach((task, index) => {
      const listContainer = document.getElementById('mainList');
      const str = `<li id=${index + 1} class="task list-items-text text-secondary ${task.completed}">
          <input type="checkbox" id=check-${index + 1} class="status form-check-input me-2">
          <input type="text" id=task-${index + 1} class="todo border-0 mb-3 list-items-text text-secondary me-5" value='${task.description}'>
          <span id="dots-${index + 1}" class="dots d-none"> <i class="fas fa-ellipsis-v"></i> </span>
          <span id="trash-${index + 1}" class="delete hide"><i class="fas fa-trash-alt"></i></span>
        </li>`;

      listContainer.insertAdjacentHTML('beforeend', str);

      if (task.completed === true) {
        const finished = document.getElementById(`task-${index + 1}`);
        const checks = document.getElementById(`check-${index + 1}`);
        checks.toggleAttribute('checked');
        finished.classList.toggle('completed');
      }
    });
  }
}
