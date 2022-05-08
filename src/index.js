import './style.css';
// import Task from './task';
import TaskController from './taskController';
// import ProjectController from './projectController';

function initTaskButtons() {
  const todoList = document.querySelector('#todo-list');
  todoList.addEventListener('click', TaskController.markDone);

  // const editButton = document.querySelector('#btn-edit');

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

// function initProject() {
//   const projectSubmitButton = document.querySelector('#project-submit');
//   projectSubmitButton.addEventListener('click', (event) => {
//     event.stopImmediatePropagation();
//     event.preventDefault();
//     ProjectController.addProject();
//   });
// }

document.addEventListener('DOMContentLoaded', initAddTask);
