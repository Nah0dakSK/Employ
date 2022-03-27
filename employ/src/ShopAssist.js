import React from "react";
import Background from "./Components/images/BackgroundImage.png";
import { Link } from "react-router-dom";
import Abouts from "./Components/images/about.png";
import Contacts from "./Components/images/contact.png";
function Shopper() {
    return(
        <header>
           <div className="container"></div>
          <div className="login">
            <Link to="/login">LOGIN</Link>
          </div>
      <div>
        <div className="rect">
          <div className="about">
            <Link to="/about"><img src={Abouts} alt="about"></img></Link>
          </div>
          <div className="contact">
            <Link to="/contact"><img src={Contacts} alt="contact"></img></Link>
          </div>
        </div>
        <img className="backimg" src={Background} alt="background"/>
        <div className="centered">JOBSIDE</div>
        </div>
        <div className="rctngl"></div>
        </header>
    )
}
export default Shopper;