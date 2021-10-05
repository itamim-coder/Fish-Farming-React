import React from 'react';

import img1 from './../../teamImg/team-img01.jpg'
import img2 from './../../teamImg/team-img02.jpg'
import img3 from './../../teamImg/team-img03.jpg'
import img4 from './../../teamImg/team-img04.jpg'
import img5 from './../../teamImg/team-img05.jpg'
import img6 from './../../teamImg/team-img06.jpg'
import './team.css'
const Team = () => {
    return (
      <div >
       <div className="section-name">
       <h1 className="text-center mt-3">Our Team</h1>
       </div>
        <div className="team-display container">
         
        <div className="team">
        
        <div>
           <img src={img1} alt="" />
         </div>
         <div className="">
           <h3> Amanda</h3>
           <p>Finance Head</p>
         </div>
        </div>
        <div className="team">
        <div>
           <img src={img2} alt="" />
         </div>
         <div className="">
           <h3> Jennifer</h3>
           <p>Fishman</p>
         </div>
        </div>
        <div className="team">
        <div>
           <img src={img3} alt="" />
         </div>
         <div className="">
           <h3> Nayer</h3>
           <p>Marketing Head</p>
         </div>
        </div>
        <div className="team">
        <div>
           <img src={img4} alt="" />
         </div>
         <div className="">
           <h3> Andrew</h3>
           <p>Fishman</p>
         </div>
        </div>
        <div className="team">
        <div>
           <img src={img5} alt="" />
         </div>
         <div className="">
           <h3> Harper</h3>
           <p>CEO</p>
         </div>
        </div>
        <div className="team">
        <div>
           <img src={img6} alt="" />
         </div>
         <div className="">
           <h3> Jackson</h3>
           <p>Consultant</p>
         </div>
        </div>
        </div>
        </div>
    );
};

export default Team;<h3>team</h3>