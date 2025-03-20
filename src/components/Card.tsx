import { Pokemon } from "../types/pokemon-type.ts"

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

export default function Card({ pokemon, onClick }: PokemonCardProps) {
  return (
    <div onClick={onClick} className="p-4 flex flex-col items-center rounded-lg border border-gray-200 bg-white/90 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer backdrop-blur-sm">
      <div className="relative w-full aspect-square mb-2 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="object-contain p-2 w-full h-auto"
        />
      </div>
      <h3 className="text-lg font-semibold capitalize text-center">{pokemon.name}</h3>
      <p className="text-sm text-gray-500 text-center">Type: {pokemon.types.join(", ")}</p>
    </div>
  )
}