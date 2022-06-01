import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Login"
import Logo from "./Components/images/logo_employ.png"
import Locality from "./Components/Locality";
import Shopper from "./jobs/ShopAssist";
import Builder from "./jobs/Builder";
import Busdriver from "./jobs/Busdriver";
import Salesman from "./jobs/Salesman";

function App() {
    return(
        <>
        <Router>
            <div className="header-flex">
              <div className="centered">JOBSIDE</div>
              <div className="comp">
            </div>
            <Link to="/home"><img src={Logo} className="logo" alt="logo"></img></Link> 
          </div>
          <Routes>
            <Route path="/shopper" element={<Shopper/>}></Route>
            <Route path="/builder" element={<Builder/>}></Route>
            <Route path="/busdriver" element={<Busdriver/>}></Route>
            <Route path="/salesman" element={<Salesman/>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/locality" element={<Locality/>}></Route>
          </Routes>
        </Router>
        </>
    )
}
export default App;