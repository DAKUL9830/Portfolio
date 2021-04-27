import React from 'react';
import photo from '../profile.png'

const aboutMe = () => {
    return (
        <div id='aboutMe' className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className="photo-wrap">
                    <img className="profile-img" src={photo} alt='photo...'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className="about-heading">about me</h1>
                   <p>
                   Hello,My name is Dmitry. 		 	 	 		
Before starting Fullstack Academy to become a software engineer, I studied in CUNY with majors:Game Design and Computer Science. 		 	 	 		
I enjoyed my practice work, but I often found myself imagining a gratifying and stimulating job solving tough problems and building tools that made a lasting difference. In April of 2020, the path became clear for me to pursue a job in coding, and in July, I enrolled in Fullstack Academy’s software engineering program. After dedicating four months of forty plus hours a week learning numerous programming languages and tools, I consider myself a full-stack developer, with a solid foundation in the NERD stack. But the biggest skill I learned since joining the coding world is how to take a brand new tool or language and have it feel like an old friend. 
  
                   </p>
                </div>
            </div>

            
        </div>
    )
}

export default aboutMe
