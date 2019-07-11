import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { whileStatement } from '@babel/types';

function Nav() {

  const NavStyle = {
    color: 'white'
  }

  return (
  <nav class="navbar navbar-expand-md">
      <Link to="/">
      <b class="navbar-brand">Damhan</b>
      </Link>
      <div class="navbar-collapse collapse justify-content-stretch">
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
      </div>
  </nav>

    );
  }

export default Nav;