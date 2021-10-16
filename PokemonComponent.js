import Component from "./Component.js"; 
class PokemonComponent extends Component{
pokemon;

  constructor (parentElement, pokemon) {
    super(parentElement, "pokemon-item", "li");
    this.pokemon = pokemon;
    this.generateHTML();
  }

  generateHTML () {
    const html = `
    <div class="pokemon">
      <h2 class="pokemon_name">${this.pokemon.name}</h2>
      <p class="pokemon_type">${this.pokemon.type}</p>
      <p class="pokemon_id">Nº ${this.pokemon.id}<p>
      <img src=${this.pokemon.img} alt ="${this.pokemon.name}Image" width=150 height=150 />
    </div>  
    `;
    this.element.innerHTML = html;
  }
}

export default PokemonComponent;