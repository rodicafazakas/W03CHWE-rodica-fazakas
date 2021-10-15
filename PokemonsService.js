class PokemonsService{
  //urlAPI = "https://pokeapi.co/api/v2/pokemon?limit=151"; // url base
  urlAPI =  'https://pokeapi.co/api/v2/pokemon?limit=100';

  async getPokemons() {
    const response = await fetch(this.urlAPI);
    console.log(response);
    const pokemons = await response.json();
    console.log(pokemons);
    return pokemons;
  }// este metodo devuelve una promesa que resuelve a un array

}

export default PokemonsService;