/* eslint-disable max-len */
export default class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.tasks = [];
  }

  get name() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  static createUnassigned(projectName) {
    if (!projectName) {
      const newTask = new Project('Unassigned', Date.now().toString(), []);
    }
  }

  static getSelectedProject() {
    const projects = JSON.parse(localStorage.getItem('task.projects')) || [];
    const selectedProjectId = localStorage.getItem('task.selectedProjectId');
    const selectedProject = projects.find((id) => projects.id === selectedProjectId);
    return this.tasks.find((selectedProjectId) => this.task.getId() === selectedProjectId);
  }

  // const selectedProject = projects.find((project) => project.id === selectedProjectId);
}
