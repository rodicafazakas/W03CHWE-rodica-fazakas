class PokemonsService {
  url =  'https://pokeapi.co/api/v2/pokemon?limit=10';

  async getService() {
    const response = await fetch(this.url);
    const pokemons = await response.json();
    console.log(pokemons);
    const allPokemonData = await pokemons.results.foreach(async (pokemon) => getPokemonData(pokemon)); 

      const getPokemonData = async function(pokemon) {
        const response = await fetch(pokemon.url);
        const pokemonData = await response.json;
        console.log(pokemonData);
        return pokemonData;
      }

    return allPokemonData;
  }// este metodo devuelve una promesa que resuelve a un array
     

}

export default PokemonsService;