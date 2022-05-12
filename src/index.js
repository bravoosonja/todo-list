import './style.css';
import domController from './domController';
import createProject from './saveAndRender';
// import eventListeners from './eventListeners';

document.addEventListener('DOMContentLoaded', domController.initEventListeners);
createProject('Unassigned');
