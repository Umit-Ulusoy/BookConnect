import Login from "./pages/Login";
import Timer from "./pages/Timer";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/timer" element={<Timer />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/welcome" element={<Landing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
