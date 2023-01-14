export const getPokemons = async (offset = 20) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();
  } catch (error) {}
};
