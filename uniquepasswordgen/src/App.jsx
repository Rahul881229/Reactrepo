import { useCallback, useEffect, useState ,useRef} from 'react'

import './App.css'         

function App() {
  const [count, setCount] = useState(8)
  const [numberalowd , setnumberalowd] = useState(false)
  const [characteralowd , setcharacteralowd] = useState(false)
  const passwordref = useRef(null)
  
  const[password , setpassword] = useState('')
  const passwordgenerator =  useCallback(()=>{
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
    if(numberalowd) str += '0123456789'
    if(characteralowd) str += '@#$'

    for(let i=1; i<=count; i++){
      let char = Math.floor(Math.random() * str.length )
      password += str.charAt(char)
    }
    setpassword(password)
  }
  , [count, numberalowd , characteralowd, setpassword])

  useEffect(() => {
    passwordgenerator()
  }, [count, numberalowd , characteralowd ,passwordgenerator])

 const [copied, setCopied] = useState(false);

const copyPassword = async () => {
  try {
    passwordref.current.select();
    await navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } catch (error) {
    console.error('Failed to copy password:', error);
  }
};

  return (
   
   <>
   
     <div>password generator </div>
     <div style={{backgroundColor: 'gray', padding: '10px', borderRadius: '5px'}}>
     <div>
     <input  value={password} readOnly placeholder="Generated Password" style={{backgroundColor: 'lightgray', border: '1px solid #ccc', padding: '5px', width: '60%', color: 'black'}} ref={passwordref}></input>
     {copied && (
  <div className="copy-popup">
    <span className="success-icon">✓</span>
    <span>Password copied successfully!</span>
  </div>
)}
     <button className="counter"  style={{ border: '1px solid #ccc', padding: '5px', marginLeft: '10px', borderRadius: '10px' ,cursor: 'pointer' ,hover: { backgroundColor: 'green' }}} onClick={copyPassword}>COPY</button>
     </div>

     <div>
      <input type = "range" min="6" max="20" value={count} className="cursor-pointer"  onChange={(e) => setCount((e.target.value))}></input>

      <label>  count: {count} </label>
      <input type="checkbox" checked={numberalowd} onChange={(e) => setnumberalowd(e.target.checked)}></input>
      <label>  numberalowd: {numberalowd ? 'yes' : 'no'} </label>
      <input type="checkbox" checked={characteralowd} onChange={(e) => setcharacteralowd(e.target.checked)}></input> 
      <label>  characteralowd: {characteralowd ? 'yes' : 'no'} </label> 
     </div>


     </div>
    </>
  )
}

export default App
