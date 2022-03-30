import React from "react";
import Background from "./Components/images/BackgroundImage.png";
import SearchBar from "./Components/SearchBar.js";
import { Link } from "react-router-dom";
import Abouts from "./Components/images/about.png";
import Contacts from "./Components/images/contact.png";
import Local from "./Components/images/local.png"

function Home() {
  return ( 
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
        <p className="cont">The right job for you</p>
        <div className="bar">
          <SearchBar 
              placeholder="choose a job"
              data={infodata}
          />
        </div>                                                                
      </div>
      <div className="rctngl"></div>
    </header>
  );
  }
export default Home;

  const infodata = [

    {
    title: "Shop Assistant",
    link: "Shopper\n"
    },
    {
    title: "Salesman",
    link: "Salesman\n"
    },
    {
    title: "Builder",
    link: "Builder\n"
    },
    {
    title: "Assistant",
    link: "Assistant\n"
    },
    {
    title: "Busdriver",
    link: "Busdriver\n"
    } 
]
