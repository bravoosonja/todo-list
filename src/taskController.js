import Task from './task';
// import Project from './projects';

export default class TaskController {
  constructor(newItem) {
    this.todoArr = [];
    this.newItem = newItem;
  }

  static toggleDone(key) {
    const index = this.todoArr.findIndex((item) => item.id === Number(key));
    this.todoArr[index].completed = !this.todoArr[index].completed;
    TaskController.renderTask(this.todoArr[index]);
  }

  static markDone(event) {
    const todoList = document.querySelector('#todo-list');
    todoList.addEventListener('click', (event) => {
      if (event.target.classList.contains('completed')) {
        const itemKey = event.target.parentElement.dataset.key;
        TaskController.toggleDone(itemKey);
      }
    });
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
        <input type="checkbox" class="check" id="${taskItem.id}"${taskItem.completed ? 'checked' : ''}>
        <span id="${taskItem.id}" class="task ${taskItem.completed ? 'completed' : ''}">${taskItem.name}</span>
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

    this.newItem = new Task(name, dueDate, priority);

    const todos = localStorage.getItem('todos');
    if (todos === null) {
      this.todoArr = [];
    } else { this.todoArr = JSON.parse(todos); }

    this.todoArr.push(this.newItem);
    TaskController.renderTask(this.newItem);
  }
}
