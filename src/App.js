import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="row" >
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;