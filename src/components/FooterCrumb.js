import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Resume from "./resume/Jiaqian Zhao.pdf";
import './css/style.css';

class FooterCrumb extends Component {
    render() {
      return (
        <Breadcrumb>
          <Breadcrumb.Item href={Resume} download="JiaqianZhao">Resume</Breadcrumb.Item>
          <Breadcrumb.Item href='https://www.linkedin.com/in/jiaqian-zhao/'>LinkedIn</Breadcrumb.Item>
        </Breadcrumb>  
      );
    };
  };
  
  export default FooterCrumb;