/*const pokemonList = 
[
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
    "stats": {
      "total": 318,
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "sp-atk": 65,
      "sp-def": 65,
      "speed": 45
    }
  }
];*/  

import PokemonsService from "./PokemonsService.js";
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";



const app = document.querySelector(".container");
let allPokemons = document.querySelector(".pokemon-list");

const services = new PokemonsService();

services.getService('https://pokeapi.co/api/v2/pokemon?limit=10').then(pokemons => {
  const pokemonsResult = pokemons.results
  const allPokemonData = [];

    for (let i=0; i < pokemonsResult.length; i++) {
      services.getService(pokemonsResult[i].url).then(
        individualPokemonData => { 
          allPokemonData.push(individualPokemonData);
          if (i === pokemonsResult.length-1) {
            console.log(allPokemonData);
          }    
        }
      );  
    };
})



        //new Page(allPokemons, "pokemon-item", "li", allPokemonData);

