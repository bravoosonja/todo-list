import { saveToLocalStorage, saveAndRender, renderTaskCount } from './saveAndRender';
import Task from './task';
import Project from './project';

const domController = (() => {
  const deleteProjectButton = document.querySelector('[data-delete-project-button]');
  const tasksContainer = document.querySelector('[data-tasks]');
  const projectsContainer = document.querySelector('[data-projects]');
  const projects = JSON.parse(localStorage.getItem('task.projects')) || [];
  const projectForm = document.querySelector('[data-new-project-form]');
  const taskForm = document.querySelector('[data-new-task-form]');
  const projectInput = document.querySelector('[data-new-project-input]');

  let selectedProjectId = localStorage.getItem('task.selectedProjectId');

  function handleProject() {
    projectsContainer.addEventLister('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'li') {
        selectedProjectId = e.target.dataset.selectedProjectId;
        saveAndRender();
      }
    });
  }

  function handleTask() {
    tasksContainer.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'input') {
        const selectedProject = projects.find((project) => project.id === selectedProjectId);
        const selectedTask = selectedProject.tasks.find((task) => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        saveToLocalStorage();
        renderTaskCount(selectedProject);
      }
    });
  }

  function handleDeleteProject() {
    deleteProjectButton.addEventListener('click', (e) => {
      projects = projects.filter((project) => project.id !== selectedProjectId);
      selectedProjectId = null;
      saveAndRender();
    });
  }

  //
  function handleTaskInput() {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskName = document.querySelector('#task-name').value;
      const dueDate = document.querySelector('#task-due-date').value;
      const priority = document.querySelector('#task-priority').value;
      if (taskName == null || taskName === '') return;
      const task = Task.createTask(taskName);
      const selectedProject = project.find((project) => project.id === selectedProjectId);
      selectedProject.tasks.push(task);
      saveAndRender();
    });
  }

  function handleProjectInput() {
    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const projectName = projectInput.value;
      if (projectName == null || projectName === '') return;
      const project = Project.createProject(projectName);
      projectInput.value = null;
      project.push(project);
      saveAndRender();
    });
  }
})();
