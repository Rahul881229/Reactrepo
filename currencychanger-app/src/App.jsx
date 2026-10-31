import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl text-black-500 bg-orange-500 font-bold underline">
        welcome to the currency changer app
      </h1>
    </>
  )
}

export default App
