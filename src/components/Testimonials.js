import React from 'react';
import TestimonialCarousel from './TestimonialCarousel.js';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>My Unity Game Projects and testimonials</h1>
            <div className='container'>
                <div className='testimonials-content'>
                    <TestimonialCarousel/>

                </div>
            </div>
        </div>
    )
}

export default Testimonials;
