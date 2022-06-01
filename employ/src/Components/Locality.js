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
        <>
        <div className="container"></div>
          <div className="login">
            <Link to="/login">LOGIN</Link>
          </div>
      <div>
        <div className="rect">
          <div className="about">
            <Link to="/about"><img className="abt" src={Abouts} alt="about"></img></Link>
          </div>
          <div className="contact">
            <Link to="/contact"><img className="abt" src={Contacts} alt="contact"></img></Link>
          </div>
          <div className="local">
            <Link to="/locality"><img className="abt"src={Local} alt="contact"></img></Link>
          </div>
        </div>
        <img className="backimg2" src={Background} alt="background"/>
        <div className="locality"><img src={Localities} alt="locality"></img></div>
        <div className="locpoint"><img className="rotate" src={locPoint} alt="local-point"></img></div>
        </div>
        <div className="rctngl"></div>
        </>
    )
}
export default Locality;