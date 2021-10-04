import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceSection = (props) => {
   console.log(props)
    const {name, image, cost} = props.mainservice;
    return (
      
              <div >
           <Col >
      <Card className="box">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> Price : $ {cost}
           
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
       
    );
};

export default ServiceSection;