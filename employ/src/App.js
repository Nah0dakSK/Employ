import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./Components/About";

function App() {
    return(
        <header>
        <Router>
            <div className="comp">
            <Link to="/home">HOME</Link>  
          </div>
            <Link to="/about">ABOUT</Link>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </Router>
        </header>
    )
}
export default App;