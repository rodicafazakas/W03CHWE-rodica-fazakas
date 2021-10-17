import Component from "./Component.js"; 
class PokemonComponent extends Component{
pokemon;

  constructor (parentElement, pokemon) {
    super(parentElement, "pokemons-list__pokemon-item", "li");
    this.pokemon = pokemon;
    this.generateHTML();
  }

  generateHTML () {
    const html = `
    <div class="pokemon-card">
      <img class="pokemon-card__img" src=${this.pokemon.img} alt ="${this.pokemon.name}Image" width=150 height=150 />
      <h3 class="pokemon-card__name">${this.pokemon.name}</h3>
      <p class="pokemon-card__type">${this.pokemon.type}</p>
      <p class="pokemon-card__id">Nº ${this.pokemon.id}<p>
      <button class="pokemon-card__save" value="+"> + </button>
      
    </div>  
    `;
    this.element.innerHTML = html;
  }
}

export default PokemonComponent;