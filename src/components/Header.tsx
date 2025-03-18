interface HeaderProps {
  currentScore: number
  bestScore: number
}

export default function Header({ currentScore, bestScore }: HeaderProps) {
  return (
    <div >
      <div >
        <h1>Pokémon Memory Game</h1>
        <p>Click on a Pokémon to earn points, but don't click on the same one twice!</p>
      </div>

      <div>
        <div>
          <h2>Current Score</h2>
          <p>{currentScore}</p>
        </div>
        <div></div>
        <div>
          <h2>Best Score</h2>
          <p>{bestScore}</p>
        </div>
      </div>
    </div>
  )
}

