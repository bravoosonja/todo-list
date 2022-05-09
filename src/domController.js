/* eslint-disable max-len */
import Task from './task';
import Project from './project';
import modSaveAndRender from './saveAndRender';

const domController = () => {
  const deleteProjectButton = document.querySelector('#btn-delete-project');
  const tasksContainer = document.querySelector('#tasks-container');
  const projectsContainer = document.querySelector('[data-projects]');
  let projects = JSON.parse(localStorage.getItem('task.projects')) || [];
  const projectForm = document.querySelector('#project-form');
  const taskForm = document.querySelector('#task-form');
  const projectInput = document.querySelector('#project-name');
  let selectedProjectId = localStorage.getItem('task.selectedProjectId');

  const handleProject = () => {
    projectsContainer.addEventLister('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'li') {
        selectedProjectId = e.target.dataset.selectedProjectId;
        modSaveAndRender.saveAndRender();
      }
    });
  };

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

  function handleDeleteProject() {
    deleteProjectButton.addEventListener('click', () => {
      projects = projects.filter((project) => project.id !== selectedProjectId);
      selectedProjectId = null;
      modSaveAndRender.saveAndRender();
    });
  }

  //
  function handleTaskInput() {
    taskForm.addEventListener('click', (e) => {
      e.preventDefault();
      const taskName = document.querySelector('#task-name').value;
      const dueDate = document.querySelector('#task-due-date').value;
      const priority = document.querySelector('#task-priority').value;
      if (taskName == null || taskName === '') return;
      const task = Task.createTask(taskName, dueDate, priority, false, Date.now().toString());
      console.log('handleTaskInput');
      const selectedProject = projects.find((project) => project.id === selectedProjectId);
      selectedProject.tasks.push(task);
      modSaveAndRender.saveAndRender();
    });
  }

  function handleProjectInput() {
    projectForm.addEventListener('click', (e) => {
      e.preventDefault();
      const projectName = projectInput.value;
      if (projectName == null || projectName === '') return;
      const project = Project.createProject(projectName);
      projectInput.value = null;
      project.push(project);
      modSaveAndRender.saveAndRender();
      console.log('projectForm');
    });
  }

  return {
    handleProject,
    handleTask,
    handleDeleteProject,
    handleTaskInput,
    handleProjectInput,
  };
};

export default { domController };
