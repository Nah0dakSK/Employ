import React from "react";
import Background from "./Components/images/BackImage.jpg";
import SearchBar from "./Components/SearchBar.js";
import Data from "./Components/Data.json";
import Connect from "./Connections";

const Home = () => {
  return (
    
    <header>
        <div className="rectangle">
          <Connect />
        </div> 
      <div className="container">
        <img src={Background} />
        <div className="centered" style={{color: "#3688A3", textAlign: "center", 
                                          fontFamily: "Arial Black", fontSize: "50px", 
                                          textShadow: "2px 2px 0px #000, -2px -2px 0px #000, -2px 2px 0px #000, 2px -2px 0px #000", 
                                          paddingTop: "20px", paddingLeft: "10px"}}>JOBSIDE</div>
        <p className="cont" style={{paddingTop: "25px"}}>The right job for you</p>
        <div className="bar">
          <SearchBar 
              placeholder="choose a job"
              data={Data} 
          />
        </div>                                                                
      </div> 
    </header>
  );
  }
export default Home;
