export default class Task {
  constructor(name, dueDate, priority, complete, id) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.id = id;
  }

  static createTask(taskItem) {
    return new Task(taskItem);
  }
}
