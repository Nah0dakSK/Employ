import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Contact from "./Components/Contact";
import Test from "./Test";
import About from "./Components/About";
import Home from "./Home";
import { MenuItem } from "@material-ui/core";


const Connect = () => {
    return(
        <Router>
          <div className="contact">
            <Link to="/contact">CONTACT</Link>  
          </div>
          <div className="categories">
            <Link to="/categories" style={{textDecoration: "none"}}>CATEGORIES</Link>
          </div>
          <div className="about">
            <Link to="/about">ABOUT</Link>    
          </div>

          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/categories" element={<Test />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          </Router>
    )
}
export default Connect;
