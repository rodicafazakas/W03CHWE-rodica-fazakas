import Component from "./Component.js";

class Button extends Component {
  text;
  actionOnClick;

  constructor(parentElement, text, actionOnClick) {
    super(parentElement, "pagination", "button");
    this.text = text;
    this.element.innerText = this.text;
    this.actionOnClick = actionOnClick;
    this.element.addEventListener("click", this.actionOnClick);

  };

};

export default Button;