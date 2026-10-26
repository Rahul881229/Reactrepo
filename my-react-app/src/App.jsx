import { useState } from 'react'

import './App.css'

function App() {
  const username = "Rahul Kumar"
  const [count, setCount] = useState(10)
 const applycount = () => {
  console.log("button clicked" , count)
  if(count < 20)
  setCount(count + 1)
setCount(prevCount => prevCount + 1)// this is the correct way to update the state based on the previous state value. It ensures that you are always working with the most recent state, especially when multiple state updates are queued.
setCount(prevCount => prevCount + 1)
setCount(prevCount => prevCount + 1)
setCount(prevCount => prevCount + 1)

  // setCount(count + 1)
  // setCount(count + 1)
  // setCount(count + 1)
}
const deccount = () => {
  console.log("button clicked" , count)
  if(count > 0)
  setCount(count - 1)
}
  for(let i = 1; i < count; i++){
    console.log("this is for loop", i)
  }
  return (
    <>
  <h1>this is my React project </h1>,
  <h2>Welcome {username}</h2>
  <h3>count is : {count}</h3>

  <button onClick={applycount}>click me</button>
  <h3>{count + 2}</h3>
  <button onClick={deccount}>decrease</button>

      </>
  )
}

export default App
