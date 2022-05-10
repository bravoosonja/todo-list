# Introduction
The objective is to develop a simple Todo List app that provides data persistance to local storage. This project is to be developed using Webpack and incorporate an external library while adhering to the OOP Principles.
<!-- [👉Live Demo]() -->
## Requirements
1. Properties of todo-items (task)
   - title
   - description
   - dueDate
   - priority
2. *Projects* or separate list of todos.
   - include default *project* on page load
   - users should be able to create new projects and choose which project their todo-items go into
3. Separate application logic from the DOM-related objects
   - creating new todos
   - setting todos as complete
   - changing todo priority
4. UI
   - view all projects
   - view all todos in each project 
     - title, due date, different colors for different priorities
   - expand a single todo to view/edit its details
   - delete a todo
5. Webpack
   - use [date-fns](https://github.com/date-fns/date-fns) library for formatting and manipulating dates and times
6. Add data persistence using Web Storage API
   - localStorage
     - function to save the projects and todos
     - function to retrieve the data from the localStorage on first load 
# Skills used
* HTML
* CSS
* JavaScript
  - localStorage
* Webpack
  - Asset management
    - csv-loader, xml-loader
  - Output management
  - Development
  - Production
  - External library
# Lessons learned
* Brainstorming before development is important - Starting out with a [list of requirements](#requirements) to assess the requirements and creating [future plans](#future-plans) of task list increase efficiency.  
* ```.stopImmediatePropagation()``` - When task input was submitted, the same input was submitted twice on the Todo List. 
* Removing the direct parent element of a node 
* Revealing module pattern - to use event listeners inside of a module pattern.
# Future plans
- [x] Set up Webpack for development & add modules
- [ ] Add functionality
     - [x] Properties of todo items
     - [ ] Projects
     - [x] UI
     - [ ] Add external library
     - [ ] Add localStorage
- [ ] Modify UI if necessary
- [ ] Refactor/clean code
- [ ] Build a production site 
- [ ] Deploy a subfolder to GitHub Pages
- [ ] Update Readme.md to include final output