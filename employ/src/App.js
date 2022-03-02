import { StylesContext } from "@material-ui/styles";
import React from "react";
import Background from "./images/BackImage.jpg";
import SearchBar from "./Components/SearchBar.js";
import Cursor from "./Components/Cursor.js"

function App() {
  return (
    
    <header>
      <div className="container" style={{paddingTop: "90px"}}>
        <img src={Background}/>
        <div className="centered" style={{color: "#3688A3", textAlign: "center", 
                                          fontFamily: "Arial Black", fontSize: "45px", 
                                          textShadow: "2px 2px 0px #000, -2px -2px 0px #000, -2px 2px 0px #000, 2px -2px 0px #000", 
                                          paddingTop: "20px", paddingLeft: "10px"}}>JOBSIDE</div>
        <p className="cont" style={{paddingTop: "25px"}}>The right job for you</p>
        <div className="bar">
          <SearchBar /> 
        </div>                                                                  
      </div>
    </header>
  );
  }
export default App;