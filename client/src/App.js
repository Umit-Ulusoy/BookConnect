import Home from "./pages/Home"
import Feet from "./pages/Feet"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import "./index.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Timer from "./components/Timer"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer/>}/>
        <Route path="/" element={<Feet/>}/>
        <Route to="/profile:id " element={<Profile/>}/>
        <Route to="/login " element={<Login/>}/>
        <Route to="/register " element={<Register/>}/>
        </Routes>
    </Router>
    
   
  )
}

export default App

