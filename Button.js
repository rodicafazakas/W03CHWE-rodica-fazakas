import Component from "./Component.js";

class Button extends Component {
  text;
  actionOnClick;

  constructor(parentElement, text, actionOnClick) {
    super(parentElement, "container__next", "button");
    this.text = text;
    this.element.textContent = this.element;
    this.element.actionOnClick = actionOnClick;
    this.element.addEventListener("click", this.actionOnClick)

  };

};

export default Button;