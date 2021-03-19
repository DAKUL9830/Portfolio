import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity,faGithub} from '@fortawesome/free-brands-svg-icons'
import { faDesktop,faFileCode} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Skills</h1>
                <div className="container">
                    <div className="row">
                   
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon ={faDesktop} size="2x"/></div>
                                <h3>Front-End</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon ={faFileCode} size="2x"/></div>
                                <h3>Back-End</h3>
                            </div>
                        </div>
                    
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon ={faUnity} size="2x"/></div>
                                <h3>Unity</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon ={faGithub} size="2x"/></div>
                                <h3>GitHub</h3>
                            </div>
                        </div>
                   

                    </div>
                </div>
            
            
        </div>
    )
}

export default Services
