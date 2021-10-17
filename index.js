import PokemonsService from "./PokemonsService.js";
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";
import Header from "./Header.js";
import Button from "./Button.js";



const app = document.querySelector(".container");
const allPokemons = document.querySelector(".pokemons-list");

//const mainHeader = new Header(app, "All Pokemons");


//const Pokedex = services.createPokemon(http://localhost:3001/pokemon);
//allPokemons.innerHTML=``;

const services = new PokemonsService();
let offset = 0;
const render = (offset) => {
  services.getService(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${offset}`).then(
    pokemons => {
      const pokemonsResult = pokemons.results
      for (let i=0; i < pokemonsResult.length; i++) {
        services.getService(pokemonsResult[i].url).then(
          individualPokemonData => { 
            new PokemonComponent(
              allPokemons, 
              {
                name: individualPokemonData.name[0].toUpperCase() + individualPokemonData.name.slice(1),
                id: individualPokemonData.id,
                type:
                  individualPokemonData.types[0].type.name[0].toUpperCase() +
                  individualPokemonData.types[0].type.name.slice(1),
                img: individualPokemonData.sprites.other.dream_world.front_default,
              },
              addToPokedex
            );
          }
        );
      }
  })
}

render(offset);

const nextButtonHandler = () => {
  allPokemons.innerHTML=``;
  offset +=6;
  render(offset);
};

const backButtonHandler = () => {
  allPokemons.innerHTML =``;
  if (offset > 0) {
    offset -=6;
    render(offset);
  }
} 

const addToPokedex = (event) => {
  const localUrl ="http://localhost:3001/pokemon";
  const addPokemonToPokedex = services.createPokemon(event.currentTarget.pokemon,localUrl);
  return addPokemonToPokedex;
}

const nextButton = new Button(app, "pagination", "Next", nextButtonHandler);
const backButton = new Button(app, "pagination", "Back", backButtonHandler);
      

