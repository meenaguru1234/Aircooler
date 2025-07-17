import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Parentcomponent from './components/Parentcomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footerarea from './components/Footerarea';
import Dropdownmenu from './components/Navbar';
import { Navbar } from 'react-bootstrap';
// import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
   

  // </React.StrictMode>
  <>
   <Parentcomponent/>
   {/* <Footerarea/> */}
   {/* <Navbar/> */}
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
