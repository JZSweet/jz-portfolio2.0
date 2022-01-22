import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Head from './img/Head.png';
import Jia from './img/Jia.png'

class Navbar extends Component {
  render() {
    return (
      <Breadcrumb>
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
        <Breadcrumb.Item href="#">About</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Project
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Contact</Breadcrumb.Item>
      </Breadcrumb>
    );
  };
};

export default Navbar;