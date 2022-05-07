import './style.css';
// import Task from './task';
import TaskController from './taskController';

function initTaskButtons() {
  const editButton = document.querySelector('#btn-edit');
  editButton.addEventListener('click', TaskController.markDone);

  const deleteButton = document.querySelector('#btn-delete');
  deleteButton.addEventListener('click', TaskController.deleteTask);
}

function initAddTask() {
  const taskSubmitButton = document.querySelector('#task-submit');
  taskSubmitButton.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    TaskController.addTask();
    initTaskButtons();
  });
}

document.addEventListener('DOMContentLoaded', initAddTask);
