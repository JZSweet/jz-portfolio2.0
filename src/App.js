import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Contact from './routes/Contact';
import Content from './routes/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to='/Content'>About</Link> |{' '}
        <Link to='/Contact'>Contact</Link>
      </nav>
      <Outlet />
      <div className='row' >
        <Content />
      </div>
      <Footer />
    </div>
  );
};

