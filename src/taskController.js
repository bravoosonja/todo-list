import Task from './task';
import Project from './projects';

export default class TaskController {
  static toggleDone(key) {
    const index = Project.findTask(key);
    Project.tasks([index]).isChecked = !Project.tasks([index]).isChecked;
    TaskController.renderTask(Project.tasks[index]);
  }

  static markDone() {
    const todoList = document.querySelector('#todo-list');
    todoList.addEventListener('click', (event) => {
      if (event.target.classList.contains('check')) {
        const itemKey = event.target.parentElement.dataset.key;
        TaskController.toggleDone(itemKey);
      }
    });
  }

  static renderTask(taskItem) {
    const todoList = document.querySelector('#todo-list');
    const isChecked = taskItem.isChecked ? 'done' : '';
    const taskNode = document.createElement('li');
    taskNode.setAttribute('class', 'todo-item');
    taskNode.setAttribute('class', `todo-item${isChecked}`);
    taskNode.setAttribute('data-key', taskItem.id);
    taskNode.innerHTML = `
        <input id="${taskItem.id} type="checkbox"/>
        <label for ="${taskItem.id}" class="check"></label>
        <span>${taskItem.name}</span>
        <span class="priority">${taskItem.priority}</span>
        <div class="todo-item-buttons">
        <button class="btn" id="btn-edit">
         <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn" id="btn-delete">
         <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;
    todoList.append(taskNode);
    TaskController.markDone();
  }

  static addTask() {
    const name = document.querySelector('#task-name').value;
    const dueDate = document.querySelector('#task-due-date').value;
    const priority = document.querySelector('#task-priority').value;
    const isChecked = false;

    const newItem = new Task(name, dueDate, priority, isChecked);
    TaskController.renderTask(newItem);
  }
}
