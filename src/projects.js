import {
  toDate, isToday, isThisWeek, subDays,
} from 'date-fns';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getName() === taskName);
  }

  addTasktoProject(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) { return this.tasks.push(newTask); }
  }

  deleteTaskfromProject(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getTasksToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateformatted());
      return isToday(toDate(taskDate));
    });
  }

  getTasksThisWeek() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateformatted());
      return isThisWeek(subDays(toDate(taskDate), 1));
    });
  }
}
