import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JZ from '../components/img/JZ.png';

class Content extends Component {
  render() {
    return (
      <Container>
        <Row md={4}>
          <Col>
            <img className='d-block w-100'
              id='jz1'
              src={JZ}
              alt='main img1' />
          </Col>
          <Col xs={6}>
            <div className="main" id='aboutme'>
              <h1>About Me</h1>
              <h2>Hi there,</h2>
              <h3>my name is JZ (Jiaqian Zhao).</h3>
              <h4>I am a full-stack web developer and UX/UI designer.</h4>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};

export default Content;