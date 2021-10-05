import React from 'react';
import img from '../../single-img-01.jpg'
import "./About.css"

const AboutUs = () => {
    return (
        <div className="about container row m-5">
            <div className=" col col-md-6 ">
             <img src={img} alt="" />

            </div>
            <div className="about-text col col-md-6 mt-5 text-center">
               <div className="section-head">
               <h5>About Us</h5>
               </div>
                <h1>Dedicated Fish Farming & Aqua Services</h1>
                <p>Aqovo is a United States based aquaculture consulting company that provides expert opinions, technology transfer and many aqua project management services worldwide. We are in the significant opportunities for water and wastewater treatment contracts within our Aqua division, as well as products and systems for land-based farming.</p>
            </div>

        </div>
    );
};

export default AboutUs;<h3>about us</h3>