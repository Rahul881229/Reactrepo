import { useState ,useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import './App.css'
import ThemeBtn from './Themebtn'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
const [themeMode, setThemeMode] = useState("light");
 const darktheme =() => {
  
  setThemeMode("dark");
 }
 const lighttheme = () => {
  setThemeMode("light");
 }
// how theme is getting chnaged 
useEffect(() => {
  document.querySelector("html").classList.remove("dark", "light");
  document.querySelector("html").classList.add(themeMode);
}, [themeMode]);
 
  return ( 
   <ThemeProvider value= {{themeMode, darktheme , lighttheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

                      <ThemeBtn />
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card />


                       
                    </div>
                </div>
            </div>

   </ThemeProvider>
  )
}

export default App
