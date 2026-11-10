
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
  }
  ,{
    path : "about",
    element : <About/>

  }
]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
