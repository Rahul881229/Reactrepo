import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Component/login'
import Profile from './Component/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Welcome to React Router</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
