import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Foot from './img/Footer.png';



class Footer extends Component {
  render() {
    return (
      <Breadcrumb>
        <div className="footer" >
          <img className='d-block w-100'
            id='footerpic'
            src={Foot}
            alt='footer img' />
        </div>
        <Breadcrumb.Item href="#">Resume</Breadcrumb.Item>
        <Breadcrumb.Item href="#">LinkedIn</Breadcrumb.Item>
      </Breadcrumb>

    );
  };
};

export default Footer;