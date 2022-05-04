export default class Task {
  constructor(name, dueDate, priority, isChecked, id) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isChecked = isChecked;
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  setisChecked(isChecked) {
    if (!isChecked || isChecked == null) this.isChecked = 'false';
    else this.isChecked = isChecked;
  }

  setPriority(priority) {
    if (!priority) this.priority = 'Medium';
    else this.priority = priority;
  }

  getPriority() { return this.priority; }

  setId(id) {
    if (!id) this.id = Date.now();
    else this.id = id;
  }
}
