import PokemonsService from "./PokemonsService.js";
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";



const app = document.querySelector(".container");
const allPokemons = document.querySelector(".pokemons-list");

const services = new PokemonsService();

services.getService('https://pokeapi.co/api/v2/pokemon?limit=10').then(pokemons => {
  const pokemonsResult = pokemons.results
  const allPokemonData = [];
    for (let i=0; i < pokemonsResult.length; i++) {
      services.getService(pokemonsResult[i].url).then(
          individualPokemonData => { 
            // allPokemonData.push(individualPokemonData);

            new PokemonComponent(allPokemons, {
              name: individualPokemonData.name[0].toUpperCase() + individualPokemonData.name.slice(1),
              id: individualPokemonData.id,
              type:
                individualPokemonData.types[0].type.name[0].toUpperCase() +
                individualPokemonData.types[0].type.name.slice(1),
              img: individualPokemonData.sprites.other.dream_world.front_default,
            });

          }
        );

        // if (i === pokemonsResult.length-1) {
        //   console.log(allPokemonData);
        // } 
      }
})



      

