class PokemonsService {

  async getService(url) {
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
  }
     

}

export default PokemonsService;