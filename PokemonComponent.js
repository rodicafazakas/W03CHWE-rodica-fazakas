import Component from "./Component.js"; 
class PokemonComponent extends Component{
pokemon;

  constructor (parentElement, className, tagName, pokemon) {
    super(parentElement, className, tagName);
    //this.element = document.createElement("li"); 
    //this.element.className = "pokemon-item";
    //this.parentElement.appendChild(this.element);
    this.pokemon = pokemon;
    this.generateHTML();

  }

  generateHTML () {
    const html = `
      <div class="name">${this.pokemon.name}</div>
      <img src=${this.pokemon.sprites.front_default}/>
      <div class="details">
        <span>Height: ${this.pokemon.height} </span>
        <span>Weight: ${this.pokemon.weight} </span>
      </div>
    `;
    this.element.innerHTML = html;
  }


}

export default PokemonComponent;