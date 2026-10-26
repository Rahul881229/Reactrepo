import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(8)
  const [numberalowd , setnumberalowd] = useState(false)
  const [characteralowd , setcharacteralowd] = useState(false)
  const[password , setpassword] = useState('')
  const passwordgenerator =  usecallback(()=>{
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
  const [numberalowd , setnumberalowd] = useState(false)
    if(numberalowd) str += '0123456789'
    if(characteralowd) str += '@#$'
  }
  , [count, numberalowd , characteralowd, password]) 


  return (
   
   <>
   
     <div>password generator </div>
     <div>
     <input placeholder='enter u password here' ></input>
     <button>COPY</button>
     </div>
    </>
  )
}

export default App
