import React from "react";
import Background from "./images/BackImage.png";

const Contact = () => {
    return(
        <header>
        <div className="rectangle">
          <p className="contact">HOME</p>
          <p className="about">ABOUT</p>
        </div>
          <div className="container">
          <div className="centered" style={{color: "#3688A3", top: "-6%",
                                            fontFamily: "Arial Black", fontSize: "60px", 
                                            textShadow: "2px 2px 0px #000, -2px -2px 0px #000, -2px 2px 0px #000, 2px -2px 0px #000", 
                                            paddingRight: "25px"}}>JOBSIDE</div>
            <img src={Background}/>
          </div>
        </header>
    )
}
export default Contact;