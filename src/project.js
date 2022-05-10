/* eslint-disable max-len */
export default class Project {
  constructor(name, id) {
    this.name = name;
    this.projects = [];
    this.id = id;
  }

  static createUnassigned() {
    const unassigned = new Project('Unassigned Tasks', Date.now().toString());
    this.projects.push(unassigned);
  }

  // static createProject(projectName) {
  //   const newProject = new Project(projectName, Date.now().toString());
  //   this.projects.push(newProject);
  //   return newProject;
  // }
}
