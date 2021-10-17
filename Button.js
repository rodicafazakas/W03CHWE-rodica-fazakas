import Component from "./Component.js";

class Button extends Component {
  text;
  actionOnClick;

  constructor(parentElement, className, text, actionOnClick, pokemon) {
    super(parentElement, className, "button");
    this.text = text;
    this.element.innerText = this.text;
    this.element.pokemon = pokemon;
    this.actionOnClick = actionOnClick;
    this.element.addEventListener("click", this.actionOnClick);

  };

};

export default Button;