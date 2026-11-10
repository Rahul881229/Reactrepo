import { useState } from 'react'

import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>

    
    <Footer/>
  
    </>
  )
}

export default App
