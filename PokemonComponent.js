import Component from "./Component.js"; 
import Button from "./Button.js";
import PokemonsService from "./PokemonsService.js";

class PokemonComponent extends Component{
pokemon;
addToPokedex;

  constructor (parentElement, pokemon, addToPokedex) {
    super(parentElement, "pokemons-list__pokemon-item", "li");
    this.pokemon = pokemon;
    this.addToPokedex = addToPokedex;
    this.generateHTML();
    this.generateAddToPokedexButton();
  }

  generateHTML() {
    const html = `
    <div class="pokemon-card">
      <img class="pokemon-card__img" src=${this.pokemon.img} alt ="${this.pokemon.name}Image" width=150 height=150 />
      <div class="pokemon-card">
        <p class="pokemon-card__id">#${this.pokemon.id.toString().padStart(3,"0")}<p>
        <h3 class="pokemon-card__name">${this.pokemon.name}</h3>
        <p class="pokemon-card__type">Type: ${this.pokemon.type}</p>
        <!--<button class="pokemon-card__save" onclick="addToPokedex()"> + </button>-->
      <div>
    </div>  
    `;
    this.element.innerHTML = html;
  }

  generateAddToPokedexButton() {
    const divCard = this.element.querySelector(".pokemon-card");
    const addToPokedexButton = new Button(divCard, "pokemon-card__save", "+", this.addToPokedex, this.pokemon); 
  }
}

export default PokemonComponent;