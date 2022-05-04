// import { Task, addTask } from './task';
// import Delete from './icons/delete.svg';

export default function renderNewTask(newTask) {
  const todoList = document.querySelector('#todo-list');
  const isChecked = newTask.isChecked ? 'done' : '';
  const newTaskNode = document.createElement('li');
  newTaskNode.setAttribute('class', `todo-item ${isChecked}`);
  newTaskNode.setAttribute('data-key', newTask.id);
  newTaskNode.innerHTML = `<input id="${newTask.id} type="checkbox/>
        <label for=${newTask.id} class=".task label p"></label>
        <span>${newTask.title}</span>
        <button class="delete">
        <svg><use href='./icons/delete.svg'></use></svg>
        </button>`;
  todoList.append(newTaskNode);
}
