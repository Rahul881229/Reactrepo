import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('blue')


  return (
      <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>  
      <div className="fixed flex-wrap justify-center bottom-20 inset-x-0 px-2">
                          <div className="text-xl font-bold justify-center" style={{ color: 'black', fontSize: '10.25rem', marginLeft: '50%' , marginBottom: '9%' }}>{counter} {color}</div>

        <div className="flex gap-4 justify-center border-2  rounded-md p-4  shadow-md borderradius-10xl" style={{ backgroundColor: 'white', borderRadius: '10px' ,width: 'fit-content',marginLeft: '50%', transform: 'translateX(-50%)'}}>
          <button style={{ backgroundColor: 'blue', color: 'white' }} className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200" onClick={() =>{ setColor('blue')
            setCounter(counter + 1);
          }}>
             Blue
          </button>
          <button style={{ backgroundColor: 'green', color: 'white' }} className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200" onClick={() => { setColor('green'); setCounter(counter + 1); }}> 
            Green
          </button>
          <button style={{ backgroundColor: 'yellow', color: 'black' }} className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200" onClick={() =>{ setColor('yellow');
            setCounter(counter + 1);
          }}>
              Yellow
          </button>
          <button style={{ backgroundColor: 'orange', color: 'white' }} className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200" onClick={() => { setColor('orange'); setCounter(counter + 1); }}>
            Orange
          </button>
          <button style={{ backgroundColor: 'pink', color: 'white' }} className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200" onClick={() =>{ setColor('pink'); setCounter(counter + 1); }}>
            Pink
          </button>
        </div>


      </div>

     </div>
      </>
     
  )
}

export default App
