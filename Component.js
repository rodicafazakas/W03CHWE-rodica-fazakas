class Component {
  element;
  parentElement;

  constructor(parentElement, className, tagName ="div") {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement.appendChild(element);
  }

}

export default Component;