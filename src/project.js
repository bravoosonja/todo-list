import {
  toDate, isToday, isThisWeek, subDays,
} from 'date-fns';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  // set name(value) {
  //   if (value) this.name = value;
  //   else this.name = 'Unassigned';
  // }

  set id(id) {
    if (!id) this.id = Date.now();
    else this.id = id;
  }

  static addTasks(taskItem) {
    this.tasks.push(taskItem);
  }

  get tasksToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return isToday(toDate(taskDate));
    });
  }

  get tasksThisWeek() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return isThisWeek(subDays(toDate(taskDate), 1));
    });
  }
}
