import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-div  mt-3">
         <div className="container footer">
         <div>
               <h6>At the Aqovo, our mission is to promote aquaculture practices. For over 30 years, Aqovo have demonstrated commitment to responsible aquaculture.</h6>
           </div>
           <div>
               <h2><span className="footer-font ">Quick Contacts</span></h2>
               <p>If you have any questions or need help</p>
               <h2><span className="footer-font">Phone</span> : +123 456 789</h2>
               <p>2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
           </div>
           
         </div>
         <hr />
         <h6 className="text-center">Copyright © 2021 Fish Farming All rights reserved.</h6>
        </div>
    );
};

export default Footer;