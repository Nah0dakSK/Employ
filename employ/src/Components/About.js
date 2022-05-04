import React from "react";
import Background from "./images/BackgroundImage.png";
import { Link } from "react-router-dom";
import Abouts from "./images/about.png";
import Contacts from "./images/contact.png";
import Local from "./images/local.png";
import Mode from "./Mode.tsx"

function About() {
    return(
        <header>
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
            <Link to="/locality"><img className="abt" src={Local} alt="contact"></img></Link>
          </div>
          <div className="mode">
          <Mode/>
          </div>
        </div>
        <img className="backimg" src={Background} alt="background"/>
        <text className="text">JOBSIDE is a webside for finding specific and nearest jobs for people around the world. 
                               Maecenas molestie nunc in risus posuere, in vestibulum lorem maximus. Phasellus quis sapien quis nisi blandit ultrices quis quis justo.</text>
        <div className="centered">JOBSIDE</div>
        </div>
        <div className="rctngl"></div>
        </header>
    )
}
export default About;