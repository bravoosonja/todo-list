import Task from './task';

export default function renderNewTask() {
  const name = document.querySelector('#task-name').value;
  const dueDate = document.querySelector('#task-due-date').value;
  const priority = document.querySelector('#task-priority').value;
  const isChecked = false;
  const newItem = new Task(name, dueDate, priority, isChecked);

  const todoList = document.querySelector('#todo-list');
  const newTaskNode = document.createElement('li');
  newTaskNode.setAttribute('class', 'todo-item');
  newTaskNode.innerHTML = `
        <button class='btn' id="btn-done">
        <i class="fa-solid fa-circle-check"></i>
        </button>
        <span>${newItem.name}</span>
        <span class="priority">${newItem.priority}</span>
        <div class="todo-item-buttons">
        <button class="btn" id="btn-edit">
         <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn" id="btn-delete">
         <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;
  todoList.append(newTaskNode);
}
