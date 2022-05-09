/* eslint-disable max-len */
import Task from './task';
import Project from './project';
import modSaveAndRender from './saveAndRender';

// DOM objects and static listeners
const domController = (() => {
  const deleteProjectButton = document.querySelector('[data-delete-project-button]');
  const tasksContainer = document.querySelector('[data-projects]');
  let projects = JSON.parse(localStorage.getItem('task.projects')) || [];
  const projectForm = document.querySelector('[data-project-form]');
  const taskForm = document.querySelector('[data-task-from]');
  const projectInput = document.querySelector('#project-name');
  let selectedProjectId = localStorage.getItem('task.selectedProjectId');

  // }

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

  const handleDeleteProject = () => {
    deleteProjectButton.addEventListener('click', () => {
      projects = projects.filter((project) => project.id !== selectedProjectId);
      selectedProjectId = null;
      modSaveAndRender.saveAndRender();
      console.log('handleDeleteProject');
    });
  };

  //
  function handleTaskInput() {
    console.log('handleTaskInput');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskName = document.querySelector('#task-name').value;
      const dueDate = document.querySelector('#task-due-date').value;
      const priority = document.querySelector('#task-priority').value;
      if (taskName == null || taskName === '') return;
      const task = new Task(taskName, dueDate, priority, false, Date.now().toString());

      const selectedProject = projects.find((project) => project.id === selectedProjectId);
      selectedProject.tasks.push(task);
      modSaveAndRender.saveAndRender();
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
      modSaveAndRender.saveAndRender();
      console.log('projectForm');
    });
  }

  return {
    selectedProjectId,
    handleTask,
    handleDeleteProject,
    handleTaskInput,
    handleProjectInput,
  };
})();// end of modSaveAndRender

function handleProject() {
  const projectsContainer = document.querySelector('[data-projects]');
  projectsContainer.addEventLister('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      domController.selectedProjectId = e.target.dataset.selectedProjectId;
      modSaveAndRender.saveAndRender();
    }
  });
}

export default { domController, handleProject };
