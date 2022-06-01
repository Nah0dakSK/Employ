import React, { useState } from "react";
import Background from "./Components/images/BackgroundImage.png";
import { Link } from "react-router-dom";
import Abouts from "./Components/images/about.png";
import Contacts from "./Components/images/contact.png";
import Local from "./Components/images/local.png"

function Login() {
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
            <Link to="/locality"><img className="abt" src={Local} alt="contact"></img></Link>
          </div>
        </div>
        <img className="backimg2" src={Background} alt="background"/>
        <div className="fix">
        <LoggedIn/>
        </div>
        </div>
        <div className="rctngl"></div>
        </>
    )
}
export default Login;

function LoggedIn() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const database = [
      {
        username: "Pato",
        password: "pato01"
      },
      {
        username: "Peter",
        password: "peter02"
      },
      {
        username: "Jana",
        password: "jana03"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      
      const userData = database.find((user) => user.username === uname.value);
  
      
      if (userData) {
        if (userData.password !== pass.value) {
          
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    );
  }