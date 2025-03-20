interface HeaderProps {
  currentScore: number
  bestScore: number
}

export default function Header({ currentScore, bestScore }: HeaderProps) {
  return (
    <div className="w-full max-w-4xl">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white drop-shadow-md mb-2">Pokémon Memory Game</h1>
        <p className="text-white text-lg">Click on a Pokémon to earn points, but don't click on the same one twice!</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white/90 shadow-xl backdrop-blur-sm flex justify-between items-center p-4">
        <div className="text-center flex-1">
          <h2 className="text-xl font-semibold text-blue-700">Current Score</h2>
          <p className="text-3xl font-bold">{currentScore}</p>
        </div>
        <div className="h-12 w-px bg-gray-300 mx-4"></div>
        <div className="text-center flex-1">
          <h2 className="text-xl font-semibold text-blue-700">Best Score</h2>
          <p className="text-3xl font-bold">{bestScore}</p>
        </div>
      </div>
    </div>
  )
}

