import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Nav';
import Head from './img/Head.png';
import Jia from './img/Jia.png';

class Header extends Component {
    render() {
        return (
            <Container>
                <Row md={4}>
                    <Col>
                        <Navbar />
                    </Col>
                    
                    <Col xs={6}>
                        <div className='header' >
                            <img className='d-block w-100'
                                id='tt'
                                src={Head}
                                alt='Header img1' />

                            <img className='d-block w-100'
                                id='name'
                                src={Jia}
                                alt='Header img2' />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Header;