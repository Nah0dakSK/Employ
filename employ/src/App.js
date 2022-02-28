import React from "react";
import Background from "./BackImage.jpg";

function App() {
  return (
    <header>
      <div className="container" style={{paddingTop: "80px"}}>
        <img src={Background}/>
        <div className="centered" style={{color: "#3688A3"}}>JOBSIDE</div>
      </div>
    </header>
  );
  }
export default App;
