import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterCrumb from '../components/FooterCrumb';
import Foot from './img/Footer.png';
import './css/style.css';



class Footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <FooterCrumb />
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
            <div className='footer' >
              <img className='d-block w-100'
                id='footerpic'
                src={Foot}
                alt='footer img' />
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};

export default Footer;