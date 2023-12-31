import Login from "./Login"
import Signup from "./signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import './Dashboard.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App