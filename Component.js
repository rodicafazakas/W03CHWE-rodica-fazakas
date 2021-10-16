class Component {
  element;
  parentElement;

  constructor(parentElement, className, tagName ="div") {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
    this.parentElement.append(this.element);
  }

}

export default Component;