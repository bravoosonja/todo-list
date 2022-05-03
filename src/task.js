function generateID() {
  return `_${Math.random().toString(16).slice(2)}`;
}

export default class Task {
  constructor(title, description, dueDate, priority) {
    this.id = generateID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get id() {
    return this.id;
  }

  get title() {
    return this.title;
  }

  set title(value) {
    if (value) {
      this.title = value;
    }
  }

  get description() {
    return this.description;
  }

  set description(value) {
    this.description = value;
  }

  get dueDate() {
    return this.dueDate;
  }

  set dueDate(value) {
    if (value) {
      this.dueDate = value;
    }
  }

  get priority() {
    return this.priority;
  }

  set priority(value) {
    if (value) {
      this.priority = value;
    }
  }
}
