import React from 'react';
import Header from './components/Header';
import Navbar from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
 
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="row">
        <Content />
      </div>
      <Footer />
    </div>
  );
};
 
export default App;