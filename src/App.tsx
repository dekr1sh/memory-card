import MemoryGame from "./components/MemoryGame.tsx"

function App() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/pokemon-bg.jpeg)]"/>
        <div className="absolute inset-0 bg-black/30"/> 
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <MemoryGame />
      </div>
    </main>
  )
}

export default App
