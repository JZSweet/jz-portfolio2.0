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
                <Row>
                    <Col md={4}>
                        <div className='header' >
                            <img className='headerpic'
                                id='tt'
                                src={Head}
                                alt='Header img1' />

                            <img className='headerpic'
                                id='name'
                                src={Jia}
                                alt='Header img2' />
                        </div>
                    </Col>
                    
                    <Col md={{ span: 4, offset: 4 }}>
                        <Navbar />
                    </Col>                    
                </Row>
            </Container>
        );
    };
};

export default Header;