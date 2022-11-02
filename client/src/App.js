import Home from "./pages/home/home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./components/login/login";
import Register from "./components/register/register";


function App() {
  return (
    <Router>
     <Routes>
     <Route path="/" exact element={<Home />} />
     <Route path="/login" exact element={<Login/>} />
     <Route path="/register" exact element={<Register/>} />
     <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App;