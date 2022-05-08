/* eslint-disable max-len */

const modSaveAndRender = (() => {
  const projects = JSON.parse(localStorage.getItem('task.projects')) || [];
  const selectedProjectId = localStorage.getItem('task.selectedProjectId');
  const tasksContainer = document.querySelector('[data-tasks]');
  const projectsContainer = document.querySelector('[data-projects]');

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

    function saveToLocalStorage() {
        if (typeof window !== 'undefined') { 
        localStorage.setItem('task.projects', JSON.stringify(projects));
        localStorage.setItem('task.selectedProjectId', selectedProjectId);
        }
  }

  function renderTasks(selectedProject) {
    const taskTemplate = document.getElementById('task-template');

    selectedProject.tasks.forEach((task) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkbox = taskElement.querySelector('input');
      checkbox.id = task.id;
      checkbox.checked = task.complete;
      const label = taskElement.querySelector('label');
      label.htmlFor = task.id;
      label.append(task.name);
      tasksContainer.appendChild(taskElement);
    });
  }

  function renderTaskCount(selectedProject) {
    const projectCountElement = document.querySelector('[data-project-count]');
    const incompleteTaskCount = selectedProject.tasks.filter((task) => !task.complete).length;
    const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
    projectCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
  }

  function renderProjects() {
    projects.forEach((list) => {
      const projectElement = document.createElement('li');
      projectElement.dataset.projectId = project.id;
      projectElement.classList.add('list-name');
      projectElement.innerText = list.name;
      if (list.id === selectedProjectId) {
        projectElement.classList.add('active-list');
      }
      projectsContainer.appendChild(projectElement);
    });
  }

  function render() {
    const projectDisplayContainer = document.querySelector('[data-project-display-container]');
    const projectTitleElement = document.querySelector('[data-project-title]');

    clearElement(projectsContainer);
    renderProjects();

    const selectedProject = projects.find((project) => this.project.id === this.selectedProjectId);
    if (this.selectedProjectId == null) {
      projectDisplayContainer.style.display = 'none';
    } else {
      projectDisplayContainer.style.display = '';
      projectTitleElement.innerText = selectedProject.name;
      renderTaskCount(selectedProject);
      clearElement(tasksContainer);
      renderTasks(selectedProject);
    }
  }

  function saveAndRender() {
    saveToLocalStorage();
    render();
  }

  return {
    saveToLocalStorage,
    saveAndRender,
    renderTaskCount,
  };
    
})();


export { saveToLocalStorage, saveAndRender, renderTaskCount };
