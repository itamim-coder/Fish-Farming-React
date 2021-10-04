import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './HomeService.css'

const HomeService = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./fourcard.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div className="service container">
           
           <h1>Devoted services </h1>
           <h6>	
If it involves aquaculture, our team of the aquaculture consultants can help to evolve all kind of projects!</h6>
       
     
       <Row xs={1} md={4} className="service-card ">
       {
           services.map(service => <Service
           service={service}
           ></Service>)
       }
 
</Row>
            </div>
         
    );
};

export default HomeService;