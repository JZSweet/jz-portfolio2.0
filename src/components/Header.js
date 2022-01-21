import React, { Component } from 'react';
import Head from './img/Head.png';
import Jia from './img/Jia.png'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='d-block w-100'
                    id='tt'
                    src={Head}
                    alt='Header img1'
                />

                <img className='d-block w-100'
                    id='name'
                    src={Jia}
                    alt='Header img2'
                />
            </div>
        );
    };
};

export default Header;