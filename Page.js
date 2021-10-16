import Component from "./Component.js";

class Page extends Component {
pokemons

constructor(parentElement, className, tagName, pokemons) {
  super(parentElement, className, tagName);
  this.pokemons = pokemons;
  this.generateHTML();

}

generateHTML () {
  const html = ` 
      <header class="all-pokemons-page">
        <h1>All Pokemons' Page</h1>
      </header>
      `;
      this.parentElement.innerHTML = html;
      const pokemonContainer = document.querySelector(".pokemons-list");
      this.pokemons.map(
        (pokemon) => new PokemonComponent(pokemonContainer, pokemon);
      );

}

}
