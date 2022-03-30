import React from "react";
import Background from "./images/BackgroundImage.png";
import { Link } from "react-router-dom";
import Abouts from "./images/about.png";
import Contacts from "./images/contact.png";
import Local from "./images/local.png";
import Localities from "./images/locality.png";
import locPoint from "./images/local_point.png"

function Locality() {
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
          <div className="local">
            <Link to="/locality"><img src={Local} alt="contact"></img></Link>
          </div>
        </div>
        <img className="backimg" src={Background} alt="background"/>
        <div className="centered">JOBSIDE</div>
        <div className="locality"><img src={Localities} alt="locality"></img></div>
        <div className="locpoint"><img src={locPoint} alt="local-point"></img></div>
        </div>
        <div className="rctngl"></div>
        </header>
    )
}
export default Locality;