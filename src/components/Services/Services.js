import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceSection from '../ServiceSection/ServiceSection';

const Services = () => {
    const [mainServices, setMainServices] = useState([]);

    useEffect(()=>{
        fetch('./eightcard.json')
        .then(res =>res.json())
        .then(data => setMainServices(data)) 
    },[])
    return (
        <div className="container text-center ">
            <h2>
               Our Best services
            </h2>
            <h5>If it involves, our team of the aquaculture cosultants can help to evolve all kind of projects! </h5>
            <Row xs={1} md={4} className="service-card  g-3">
       {
           mainServices.map(mainservice => <ServiceSection
           mainservice={mainservice}
           ></ServiceSection>)
       }
 
</Row>
        </div>
    );
};

export default Services;<h2>
services</h2>