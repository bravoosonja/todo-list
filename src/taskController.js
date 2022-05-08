import Task from './task';
import Project from './project';

export default class TaskController {
  static toggleDone(key) {
    const index = this.todoArr.findIndex((item) => item.id === Number(key));
    this.todoArr[index].isChecked = !this.todoArr[index].isChecked;
    TaskController.renderTask(this.todoArr[index]);
  }

  static markDone(event) {
    if (event.target.classList.contains('check')) {
      const itemKey = event.target.dataset.key;
      TaskController.toggleDone(itemKey);
    }
  }

  static deleteTask() {
    this.parentElement.remove();
    // const itemKey=event.tar
    // const index = this.todoArr.findIndex((item) => item.id === Number(key));
    // const todo = {
    //   deleted: true,
    //   ...this.todoArr[index],
    // };
    // this.todoArr = this.todoArr.filter((item) => item.id !== Number(key));
    // TaskController.renderTask(todo);
  }

  static renderTask(taskItem) {
    const todoList = document.querySelector('#todo-list');
    const taskNode = document.createElement('li');
    taskNode.setAttribute('class', 'todo-item');
    taskNode.setAttribute('data-key', taskItem.id);
    taskNode.innerHTML = `
        <input type="checkbox" class="check" id="${taskItem.id}">
        <span id="${taskItem.id}">${taskItem.name}</span>
        <span class="priority">${taskItem.priority}</span>
        <span>${taskItem.dueDate}</span> 
        <button class="btn" id="btn-edit">
         <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn" id="btn-delete">
         <i class="fa-solid fa-trash"></i>
        </button>
       
        `;
    todoList.append(taskNode);
  }

  static addTask() {
    const name = document.querySelector('#task-name').value;
    const dueDate = document.querySelector('#task-due-date').value;
    const priority = document.querySelector('#task-priority').value;
    const isChecked = false;
    const newItem = new Task(name, dueDate, priority, isChecked);

    const todos = localStorage.getItem('todos');
    Project.tasks = JSON.parse(todos);

    Project.addTasks(newItem);

    TaskController.renderTask(newItem);
  }
}
