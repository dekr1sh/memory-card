import { Pokemon } from "../types/pokemon-type.ts"

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <div onClick={onClick}>
      <div>
        <img
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.types.join(", ")}</p>
    </div>
  )
}