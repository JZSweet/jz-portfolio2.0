import React, { Component } from 'react';
import Foot from './img/Footer.png';


class Footer extends Component {
  render() {
    return (
      < div className="footer" >
        <img className='d-block w-100'
          id='footerpic'
          src={Foot}
          alt='footer img'
        />
      </div>
    );
  };
};

export default Footer;