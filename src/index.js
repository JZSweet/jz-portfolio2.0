import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Contact from "./routes/Contact";
import Content from "./routes/Content";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Content" element={<Content  />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
    document.getElementById("root")
);