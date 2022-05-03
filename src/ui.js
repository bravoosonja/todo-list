export default class UI {
  static loadHomepage() {
    UI.createHtmlElement();
    UI.render();
  }

  static createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if (id) element.setAttribute('id', id);
    if (arrayClasses) {
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
    }

    if (content) element.innerText = content;

    return element;
  }

  static render() {
    // const header = UI.createHtmlElement('div', 'header', null, 'TO-DO LIST');
    // document.body.appendChild(header);

    // const content = UI.createHtmlElement('div', 'content', null, null);
    // document.body.appendChild(content);

    // const tasksGrid = UI.createHtmlElement('div', 'tasks-grid', ['tasks'], null);
    // content.appendChild(tasksGrid);

    // const projectsContainer = UI.createHtmlElement('div', 'projects-container', null);
    // content.appendChild(projectsContainer);
  }
}
