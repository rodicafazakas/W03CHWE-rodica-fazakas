class PokemonsService {

  async getService(url) {
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
  }
     
  async createPokemon(pokemon, url) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type" : "application/json"
      },
    });
    const newPokemon = await response.json();
    return newPokemon;
  }

}

export default PokemonsService;