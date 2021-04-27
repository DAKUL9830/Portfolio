import React from "react";
import Typed from "react-typed"
import {Link} from 'react-scroll';

const Header = () => {
    return (
       <div id='home' className="header-wrapper">
           <div className="main-info">
               <h1>My Portfolio</h1> 
              <Typed
              className="typed-text"
              strings={["DMITRY AKULOV","JUNIOR FULLSTACK SOFTWARE DEVELOPER"]}
              typeSpeed={50}
              backSpeed={30}
              loop
              />
              <Link smooth={true} to='contacts' href="#" className="offer-button">contact me</Link>
              </div>
       </div>
    )
}

export default Header
