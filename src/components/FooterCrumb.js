import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './css/style.css';

class FooterCrumb extends Component {
    render() {
      return (
        <Breadcrumb>
          <Breadcrumb.Item href='#'>Resume</Breadcrumb.Item>
          <Breadcrumb.Item href='#'>LinkedIn</Breadcrumb.Item>
        </Breadcrumb>  
      );
    };
  };
  
  export default FooterCrumb;