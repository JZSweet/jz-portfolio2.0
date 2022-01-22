import React from 'react';
import Navbar from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="row" >
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;