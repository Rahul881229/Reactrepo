import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const reactelement = React.createElement(
  'a',
   {href : 'https://google.com', target : '_blank'}, 
   'Hello Google'
)
createRoot(document.getElementById('root')).render(
  // reactelement,
    <App />
)
