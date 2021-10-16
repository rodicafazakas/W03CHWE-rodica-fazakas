class PokemonsService {

  async getService(url) {
    const response = await fetch(url);
    const pokemons = await response.json();
    console.log(pokemons);

    // const pokemonData = pokemons.results;

    // async function getPokemonData(pokemon) {
    //   const response = await fetch(pokemon.url);
    //   const pokemonData = await response.json();
    //   console.log(pokemonData);
    //   return pokemonData.results;
    // } 

    // const allPokemonData = []; 
    //   for (let pokemon of pokemons.results) {
    //     const individualPokemonData = getPokemonData(pokemon);
    //     allPokemonData.push(individualPokemonData);  
    //   }

    // console.log(allPokemonData);  
    // return allPokemonData;
    
    return pokemons;
  }
     

}

export default PokemonsService;