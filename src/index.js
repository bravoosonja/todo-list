import './style.css';
// import UI from './ui';
// import Task from './task';
import addTask from './task';

function initAddTask() {
  const taskForm = document.querySelector('#tasks-input');
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
  });
}

document.addEventListener('DOMContentLoaded', initAddTask);
