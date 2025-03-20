import { useEffect, useState } from "react"
import { fetchPokemons } from "../api/pokemon-api.ts"
import { Pokemon } from "../types/pokemon-type.ts"
import Card from "./Card.tsx"
import Header from "./Header.tsx"

export default function MemoryGame() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [clickedPokemons, setClickedPokemons] = useState<number[]>([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const shuffleArray = (array: Pokemon[]): Pokemon[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(12);
        setPokemons(shuffleArray(data));
      } catch (err) {
        setError("Failed to load Pokémon data. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadPokemons()
  }, [])

  const handleCardClick = (id: number) => {
    if (clickedPokemons.includes(id)) {
      setClickedPokemons([])
      setCurrentScore(0)
    } 
    else {
      const newScore = currentScore + 1
      setClickedPokemons([...clickedPokemons, id])
      setCurrentScore(newScore)

      if (newScore > bestScore) {
        setBestScore(newScore)
      }
    }

    setPokemons(shuffleArray(pokemons))
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p className="mt-4 text-white text-xl">Loading Pokémon...</p>
      </div>
    )
  }

  else if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        {/* tells screen readers to immediately announce the error */}
        <div role="alert" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">  
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <Header currentScore={currentScore} bestScore={bestScore} />

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onClick={() => handleCardClick(pokemon.id)} />
        ))}
      </div>
    </div>
  )
}

