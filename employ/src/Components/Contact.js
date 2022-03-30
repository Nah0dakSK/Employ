import React from "react";
import Background from "./images/BackgroundImage.png";
import { Link } from "react-router-dom";
import Abouts from "./images/about.png";
import Contacts from "./images/contact.png";
import Local from "./images/local.png"


const Contact = () => {
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
        <text className="text2">E-mail:</text>
        <text className="text3">mgr.ing.dudini@spsknm.com</text>
        <text className="text4">Phone Number:</text>
        <text className="text5">0903574216</text>
        <text className="text6">Company:</text>
        <text className="text7">Jobbers s.r.o</text>
        </div>
        <div className="rctngl"></div>
        </header>
    )
}
export default Contact;