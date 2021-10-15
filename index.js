const pokemonList = 
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
];  

import PokemonsService from "./PokemonsService";

const services = new PokemonsService();
services.getPokemons();

