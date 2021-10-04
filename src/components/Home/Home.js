import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css"


const Home = () => {
    return (
        <div>
        <div id="homePage">
        <div class="hero">
         <div className="text">
            <h1> Global Fish Farming</h1>
            <h3>Innovation and Services to The Global Aquaculture Sector</h3>
           <NavLink to="/aboutus" className="btn-regular">More Details</NavLink>
         </div>
        </div>
      </div>


     

      </div>

        
    );
};

export default Home;