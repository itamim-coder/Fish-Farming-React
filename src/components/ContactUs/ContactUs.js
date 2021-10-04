
import React from 'react';
import { Form, Row, Button, Col, FloatingLabel } from 'react-bootstrap';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="container text-center ">
            <h1>Have A Questions Drop Us Line?</h1>
            <h6>We take great pride in everything that we do, complete control over products allows us to ensure customers receive best service.</h6>
            <Form className="form-div">
  <Row className="mb-3 mt-3">
  <Form.Group as={Col} >
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label></Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} >
  <Form.Label></Form.Label>
    <Form.Control type="number" placeholder="Enter Number" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label></Form.Label>
    <Form.Control placeholder="Enter subject" />
    </Form.Group>

    
  </Row>

  

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label></Form.Label>
    <Form.Control placeholder="Enter subject" />
  </Form.Group>

  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>



  <Button className="m-2" variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default ContactUs;<h3>contact us</h3>