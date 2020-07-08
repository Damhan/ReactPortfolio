import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import drresume from './../assets/drresume.pdf';

function Navb() {

  return (

  <Navbar collapseOnSelect expand="lg" className="stroke">
    <Link to="/">
      <Navbar.Brand className="navbar-brand hvr-grow">Damhan</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <ul class="navbar-nav ml-auto">
               <Link to="/projects">
                 <li class="navbar-text navlinks" >Projects</li>
               </Link>
              
               <Link to="/experience">
                 <li class="navbar-text navlinks" >Services</li>
               </Link>
               <Link to={drresume} target="_blank">
                 <li class="navbar-text navlinks" >Resume</li>
                </Link>

               <Link to="/contact">
                 <li class="navbar-text navlinks" >Contact</li>
               </Link>
           </ul>
    </Navbar.Collapse>
  </Navbar>
  

    );
  }

export default Navb;