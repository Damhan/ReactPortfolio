import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

function Navb() {

  return (

  <Navbar collapseOnSelect expand="lg" className="stroke">
    <Link to="/">
      <Navbar.Brand className="navbar-brand">Damhan</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <ul class="navbar-nav ml-auto">
               <Link to="/projects">
                 <li class="navbar-text navlinks" >Projects</li>
               </Link>
              
               <Link to="/experience">
                 <li class="navbar-text navlinks" >Experience</li>
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