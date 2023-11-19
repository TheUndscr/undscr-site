import Counter from './assets/Counter'
import './twcss.css'

function App() {
  return (
    <>
      <div className="font-source flex flex-col gap-10 justify-center items-center h-screen bg-zinc-900 text-zinc-200">
        <img src="logo.png" className="h-20" />
        <div className="flex flex-col p-0 md:p-20 rounded-xl gap-9 md:gap-10 justify-center items-center bg-transparent md:bg-zinc-200 text-zinc-200 md:text-zinc-900">
          <p className="text-2xl">It's been...</p>
          <Counter />
          <p>Without wifi</p>
        </div>

        <p className="text-zinc-600 italic">the struggle is real lol</p>
      </div>
    </>
  )
}

export default App
