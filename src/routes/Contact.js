import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JZ2 from '../components/img/JZ2.png';

class Contact extends Component {
    render() {
      return (
        <Container>
          <Row md={4}>
            <Col>
              <img className='d-block w-100'
                id='jz1'
                src={JZ2}
                alt='main img2' />
            </Col>
            <Col xs={6}>
              <div className="main" id='contactme'>
                <h1>You can find my past projects on  GitHub.</h1>
                <h2>If you like talking about code, shoot me an  Email.</h2>
                <h3>Or connect with me on  LinkedIn.</h3>
                <h4>Thank you for seeing me. </h4>
              </div>
            </Col>
          </Row>
        </Container>
      );
    };
  };
  
  export default Contact;