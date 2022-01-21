import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
 
class Navbar extends Component {
  render() {
    return (
        <Breadcrumb>
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