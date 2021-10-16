import Component from "./Component.js";

class Header extends Component {
  text;

  constructor (parentElement, text) {
    super(parentElement, "container__main-header", "h1");
    this.text = text;
    this.element.textContent = this.text;
  }

}

export default Header;