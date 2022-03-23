import React from "react";
import Background from "./Components/images/BackImage.png";
import SearchBar from "./Components/SearchBar.js";
import Data from "./Components/Data.json";
import Connect from "./Connections";

function Home() {
  return ( 
    <header>
        <div className="rectangle">
          
        </div> 
      <div className="container">
        <img src={Background} />
        <div className="centered">JOBSIDE</div>
        <p className="cont">The right job for you</p>
        <div className="bar">
          <SearchBar 
              placeholder="choose a job"
              data={Data} 
          />
        </div>                                                                
      </div>
      <div className="rctngl"></div> 
    </header>
  );
  }
export default Home;

