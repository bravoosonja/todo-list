import './style.css';
// import UI from './ui';
// import Task from './task';
import renderNewTask from './taskController';

function initAddTask() {
  const taskSubmitButton = document.querySelector('#task-submit');
  taskSubmitButton.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    renderNewTask();
  });
}

document.addEventListener('DOMContentLoaded', initAddTask);
