import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
       <div className="header-wrapper">
           <div className="main-info">
               <h1>My Portfolio</h1> 
              <Typed
              className="typed-text"
              strings={["DMITRY AKULOV","JUNIOR FULLSTACK SOFTWARE DEVELOPER"]}
              typeSpeed={50}
              backSpeed={30}
              loop
              />
              <a href="#" className="offer-button">contact me</a>
              </div>
       </div>
    )
}

export default Header
