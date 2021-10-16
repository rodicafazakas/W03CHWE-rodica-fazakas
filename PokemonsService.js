class PokemonsService {
  url =  'https://pokeapi.co/api/v2/pokemon?limit=10';

  async getService() {
    const response = await fetch(this.url);
    const pokemons = await response.json();
    console.log(pokemons);

    const allPokemonData = pokemons.results
    async function getPokemonData(pokemon) {
      const response = await fetch(pokemon.url);
      const pokemonData = await response.json();
      console.log(pokemonData);
      return pokemonData;
    } 

      for (let pokemon of pokemons.results) {
        getPokemonData(pokemon); 
      }

    return allPokemonData;
  }// este metodo devuelve una promesa que resuelve a un array
     

}

export default PokemonsService;