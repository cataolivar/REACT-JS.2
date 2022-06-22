import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget"
import reportWebVitals from './reportWebVitals';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const root3 = ReactDOM.createRoot(document.getElementById('root3'));

//HEADER
root1.render(
  <React.StrictMode>
     <Header/>
  </React.StrictMode>
);

//NAVBAR
root2.render(
  <React.StrictMode>
     <NavBar/>
  </React.StrictMode>
);

//CARTWIDGET
root3.render(
  <React.StrictMode>
     <CartWidget/>
  </React.StrictMode>
);