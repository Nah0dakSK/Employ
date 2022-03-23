import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Contact from "./Components/Contact";
import Test from "./Test";
import Home from "./Home";


const Connect = () => {
    return(
        <Router>
          <div className="contact">
            <Link to="/contact">CONTACT</Link>  
          </div>
          <div className="categories">
            <Link to="/categories" >CATEGORIES</Link>
          </div>
          <div className="about">
            <Link to="/about">ABOUT</Link>    
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/categories" element={<Test />}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
          </Router>
    )
}
export default Connect;

const About = () => {
  return(
    <header>
        <div className="rectangle">
        </div>
          <div className="cntr" style={{top: "-6%", fontSize: "60px", 
                                            paddingRight: "25px"}}>JOBSIDE</div>
        </header>
  )
}