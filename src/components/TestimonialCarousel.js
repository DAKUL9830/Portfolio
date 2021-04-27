import React from 'react';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//GAME IMAGES
import image1 from "../images/image1.png";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.png";

const TestimonialCarousel = () => {
    return (
       <Carousel
       showArrows={true}
       infiniteLoop={true}
       showThumbs={false}
       showStauts={false}
       autoPlay={true}
       interval={3000}>
        <>
        
        <img  src={image1} alt ="image1..."/>
        <div className='myCarousel'>
        <h3>MELOZOMB Game testimonial</h3>
        <p>This is absolutely hilarious</p>
        <b>YouTube</b> <a className="hyper-link" onClick={()=>window.open("https://youtu.be/0yVSMroo41E")}>https://youtu.be/0yVSMroo41E</a>
        <br/>
        </div>
        </>

        <>
        <img  src={image2} alt ="image2..."/>
        <div className='myCarousel'>
        <h3>MELOZOMB Game</h3>
        <p>Melozomb (A simple 3d game with one level developed in Unity)</p>
        <b>itch.io</b> <a className="hyper-link" onClick={()=>window.open("https://dima1988.itch.io/melozomb")}>https://dima1988.itch.io/melozomb </a>
        <br/>
        </div>
        </>

        <>
        <img  src={image3} alt ="image3..."/>
        <div className='myCarousel'>
        <h3>DESTROYER Game</h3>
        <p>First Person Shooter (another project in Unity with well-designed and complicated obstacles and enemies with basic AI)</p>
        <b>itch.io</b> <a className="hyper-link" onClick={()=>window.open("https://dima1988.itch.io/destroyer")}>https://dima1988.itch.io/destroyer</a>
        <br/>
        </div>
        </>

        <>
        <img  src={image4} alt ="image4..."/>
        <div className='myCarousel'>
        <h3>AQUAMAN Game</h3>
        <p>Aquaman (A simple 2d game, which mechanic is close to Flappy Birds)</p>
        <b>itch.io</b> <a className="hyper-link" onClick={()=>window.open("https://dima1988.itch.io/divergame")}>https://dima1988.itch.io/divergame</a>
        <br/>
        </div>
        </>

       </Carousel>
    )
}

export default TestimonialCarousel;
