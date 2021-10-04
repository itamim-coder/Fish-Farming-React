import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./service.css"
const Service = (props) => {

    const {name, image, cost} = props.service
    return (
        <div>
           <Col>
      <Card className="box-card">
        <Card.Img variant="top" src={image} />
      
         <div className="box ">
         <h4>{name}</h4>
          <h6> Price : $ {cost} </h6>
         </div>
           
       
       
      </Card>
    </Col>
        </div>
    );
};

export default Service;