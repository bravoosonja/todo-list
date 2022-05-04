import './style.css';
import TaskController from './taskController';

function initAddTask() {
  const taskSubmitButton = document.querySelector('#task-submit');
  taskSubmitButton.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    TaskController.addTask();
  });
}

document.addEventListener('DOMContentLoaded', initAddTask);
