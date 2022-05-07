import {
  toDate, isToday, isThisWeek, subDays,
} from 'date-fns';

const 

// export default class Project {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.tasks = [];
//   }

//   getName() {
//     return this.name;
//   }

//   setName(name) {
//     if (name) this.name = name;
//   }

//   getId() {
//     return this.id;
//   }

//   setId(id) {
//     if (!id) this.id = Date.now();
//     else this.id = id;
//   }

//   getTasks() {
//     return this.tasks;
//   }

//   setTasks(tasks) {
//     if (tasks) this.tasks.push(tasks);
//     else this.tasks = tasks;
//   }

//   getTasksToday() {
//     return this.tasks.filter((task) => {
//       const taskDate = new Date(task.getDateFormatted());
//       return isToday(toDate(taskDate));
//     });
//   }

//   getTasksThisWeek() {
//     return this.tasks.filter((task) => {
//       const taskDate = new Date(task.getDateFormatted());
//       return isThisWeek(subDays(toDate(taskDate), 1));
//     });
//   }
// }
