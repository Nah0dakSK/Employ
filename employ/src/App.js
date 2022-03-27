import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Login"
import Logo from "./Components/images/logo_employ.png"
import Locality from "./Locality";

function App() {
    return(
        <header>
        <Router>
            <div className="comp">
            <Link to="/home"><img src={Logo} alt="logo"></img></Link>  
          </div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/locality" element={<Locality/>}></Route>
          </Routes>
        </Router>
        </header>
    )
}
export default App;