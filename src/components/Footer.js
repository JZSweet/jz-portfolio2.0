import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Foot from './img/Footer.png';
import './css/style.css';



class Footer extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href='#'>Resume</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>LinkedIn</Breadcrumb.Item>
        <div className='footer' >
          <img className='d-block w-50'
            id='footerpic'
            src={Foot}
            alt='footer img' />
        </div>
      </Breadcrumb>

    );
  };
};

export default Footer;