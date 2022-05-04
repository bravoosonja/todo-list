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

  // static render(filters) {

  // }
}
