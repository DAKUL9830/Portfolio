import React from 'react';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

//FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons'

//REACT POPUPBOX
import {PopupboxManager,PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    const openPopupboxLambo=()=>{
        const content=(
        <>
          <img  className="portfolio-image-popupbox" src={project1} alt ="Four Lambo project..."/>
          <p>Ecommerce Project (part of a team of four developers)
             Full E-commerce website(demo) for selling luxury supercars,created with javascript,React,Express,js,Redux and PostgreSQL.
            In this project I created logging page,payment method,seeded data,etc</p>
            <b>GitHub</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/DAKUL9830/2007-four-horsemen-1")}>https://github.com/DAKUL9830/2007-four-horsemen-1</a>
            <br/>
            <b>Live</b> <a className="hyper-link" onClick={()=>window.open("https://four-lambo.herokuapp.com/","_blank")}>https://four-lambo.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({content})
    }
    const popupboxConfigLambo={
        titleBar:{
            enable:true,
            text:"React project"
        },
        fadeIn:true,
        fadeInSpeed:500
      }

    const openPopupboxVol=()=>{
        const content=(
        <>
          <img  className="portfolio-image-popupbox" src={project2} alt ="Volunteer App project..."/>
          <p>Social network for volunteers(demo),created with javascript,React,Express,js,Redux,PostgreSQL,Socket.
I worked with data,created pages for entering information,updating information in the account,etc</p>
            <b>GitHub</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/DJAC-Capstone/volunteerIn")}>https://github.com/DJAC-Capstone/volunteerIn</a>
           
        </>
        )
        PopupboxManager.open({content})
    }
     
    const popupboxConfigVol={
        titleBar:{
            enable:true,
            text:"React project"
        },
        fadeIn:true,
        fadeInSpeed:500
      }

    const openPopupboxRobin=()=>{
        const content=(
        <>
          <img  className="portfolio-image-popupbox" src={project3} alt ="RobinHood project..."/>
          <p>Simulator of live time trading on the stock market with graphs
This solo project was created with javascript,React,Express.js,Websocket</p>
            <b>GitHub</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/DAKUL9830/2007-four-horsemen-1")}>https://github.com/DAKUL9830/2007-four-horsemen-1</a>
           
        </>
        )
        PopupboxManager.open({content})
    }
  

   

      const popupboxConfigRobin={
        titleBar:{
            enable:true,
            text:"React project"
        },
        fadeIn:true,
        fadeInSpeed:500
      }
    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>portfolio</h1>
                <div className='image-box-wrapper row justify-content-center'>
                <div className='portfolio-image-box' onClick={openPopupboxLambo}>
                    <img className='portfolio-image' src={project1} alt="Four Lambo Project..."/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    
                </div>
                {/* {} */}
                <div className='portfolio-image-box'  onClick={openPopupboxVol}>
                    <img className='portfolio-image' src={project2} alt="Volunteer App..."/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    
                </div>
                 {/* {} */}
                 <div className='portfolio-image-box' onClick={openPopupboxRobin}>
                    <img className='portfolio-image' src={project3} alt="FakeRobinHood Project..."/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>
                </div>
            
            </div>
            <PopupboxContainer {...popupboxConfigLambo} />
            <PopupboxContainer {...popupboxConfigVol} /> 
            <PopupboxContainer {...popupboxConfigRobin} /> 
            
           
        </div>
    )
}

export default Portfolio
