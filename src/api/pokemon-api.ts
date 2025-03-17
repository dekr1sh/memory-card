import { Pokemon } from "../types/pokemon-type";

export async function fetchPokemons(limit = 12) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    if(!response.ok) throw new Error("Failed to fetch Pokémon list");

    const data = await response.json();
    const selected = data.results.sort(() => Math.random() - 0.5).slice(0, limit); // shuffling and then selecting 

    const pokemonPromises = selected.map(async (pokemon: { name: string; url: string }) => {
      const detailResponse = await fetch(pokemon.url)

      if (!detailResponse.ok) {
        throw new Error(`Failed to fetch details for ${pokemon.name}`)
      }

      const pokemonData = await detailResponse.json()

      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.other["official-artwork"].front_default || pokemonData.sprites.front_default,
        types: pokemonData.types.map((type: { type: { name: string } }) => type.type.name),
      }
    })

    const pokemons: Pokemon[] = await Promise.all(pokemonPromises);
    return pokemons;
  } catch (error) {
    console.error("Error fetching Pokémon:", error)
    throw error
  }
}