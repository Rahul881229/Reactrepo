
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/loginpage/login.jsx'
import App from './App.jsx'
import User from './components/user/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <App/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//   }
//   ,{
//     path : "about",
//     element : <About/>

//   },
//   {
//     path : "contact",
//     element : <Contact/>
//   },
//   {path : "login",
//     element : <Login/>
//   }
// ]}
// ])
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path ="user/:userid" element={<User/>}/>
      <Route path ="github" element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
