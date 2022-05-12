/* eslint-disable max-len */
import { createProject, createTask, modSaveAndRender } from './saveAndRender';

const domController = (() => {
  const deleteProjectButton = document.querySelector('[data-delete-project-button]');
  const tasksContainer = document.querySelector('[data-tasks]');
  const projectsContainer = document.querySelector('[data-projects]');
  const projectForm = document.querySelector('[data-project-form]');
  const taskForm = document.querySelector('[data-task-from]');
  // const projectInput = document.querySelector('#project-name');
  const taskName = document.querySelector('#task-name').value;
  const dueDate = document.querySelector('#task-due-date').value;
  const priority = document.querySelector('#task-priority').value;
  const projectName = document.querySelector('#project-name').value;
  let projects = JSON.parse(localStorage.getItem('projects')) || [];
  let selectedProjectId = localStorage.getItem('task.selectedProjectId');

  // if this doesn't work use regular function
  const handleTask = () => {
    tasksContainer.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'input') {
        const selectedProject = projects.find((project) => project.id === selectedProjectId);
        const selectedTask = selectedProject.tasks.find((task) => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        modSaveAndRender.saveToLocalStorage();
        modSaveAndRender.renderTaskCount(selectedProject);
      }
    });
  };

  const deleteProject = () => {
    deleteProjectButton.addEventListener('click', () => {
      projects = projects.filter((project) => project.id !== selectedProjectId);
      selectedProjectId = null;
      modSaveAndRender.saveAndRender();
      console.log('handleDeleteProject');
    });
  };

  const handleProject = () => {
    projectsContainer.addEventLister('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'li') {
        selectedProjectId = e.target.dataset.selectedProjectId;
        modSaveAndRender.saveAndRender();
      }
    });
  };

  function handleProjectInput(e) {
    e.preventDefault();
    if (projectName == null || projectName === '') return;
    const project = createProject(projectName);
    projects.push(project);
    modSaveAndRender.saveAndRender();
    console.log('went through to saveAndRender');
  }

  function handleTaskInput(e) {
    e.preventDefault();
    console.log('handleTaskInput');
    if (taskName == null || taskName === '') return;
    const task = createTask(taskName, dueDate, priority);
    const selectedProject = projects.find((project) => project.id === selectedProjectId);
    selectedProject.tasks.push(task);
    modSaveAndRender.saveAndRender();
  }

  return {

    deleteProjectButton,
    tasksContainer,
    taskForm,
    projectForm,
    projectsContainer,
    handleProject,
    handleTask,
    handleTaskInput,
    handleProjectInput,
    deleteProject,
  };
})(); // end of module

function initEventListeners() {
  domController.projectForm.addEventListener('submit', domController.handleProjectInput);
  domController.taskForm.addEventListener('submit', domController.handleTaskInput);
}

export default {
  createProject, createTask, domController, initEventListeners,
};
