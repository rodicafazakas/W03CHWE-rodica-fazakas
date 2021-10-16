class PokemonComponent extends Component{

  constructor () {
    super(parentElement, className, tagName, url);

  }

  generateHTML () {
    const html = `
      <div class="name">${this.name}</div>
      <img src=${this.sprites.front_default}/>
      <div class="details">
        <span>Height: ${this.height} </span>
        <span>Weight: ${this.weight} </span>
      </div>
    `;
    this.element.innerHTML = html;
  }


}

export default PokemonComponent;