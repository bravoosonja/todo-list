import Project from './project';

export default class ProjectController {
  static renderProject(newProject) {
    const projects = document.querySelector('#projects');
    const projectNode = document.createElement('p');
    projectNode.setAttribute('class', 'project');
    projectNode.setAttribute('data-key', Project.id);
    projects.appendChild(projectNode);
  }

  static addProject() {
    const projectName = document.querySelector('#project-name').value;
    const newProject = new Project(projectName);
    ProjectController.renderProject(newProject);
  }
}
