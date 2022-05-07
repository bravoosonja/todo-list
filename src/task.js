export default class Task {
  constructor(name, dueDate, priority) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  set id(newId) {
    if (!newId) this.id = Date.now();
    else this.id = newId;
  }

  static dateFormatted() {
    const day = this.dueDate.split('/')[0];
    const month = this.dueDate.split('/')[1];
    const year = this.dueDate.split('/')[2];
    return `${day}/${month}/${year}`;
  }
}
