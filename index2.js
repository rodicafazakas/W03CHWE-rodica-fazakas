import PokemonsService from "./PokemonsService.js";
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";

const app = document.querySelector(".container");
const allPokemons = document.querySelector(".pokemons-list");

//const mainHeader = new Header(app, "All Pokemons");


//allPokemons.innerHTML=``;

const services = new PokemonsService();

let offset = 0;
const render = () => {
  services.getService(`https://pokemon-rodica-fazakas.herokuapp.com/pokemon`).then(
    pokemons => {
      for (let individualPokemonData of pokemons) {
      
            new PokemonComponent(
              allPokemons, 
              {
                name: individualPokemonData.name,
                id: individualPokemonData.id,
                type:individualPokemonData.type,
                img: individualPokemonData.img,
              },
              function(){}
            );
          
      }
  })
}

render();



      

