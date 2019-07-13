import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import {FaCircleNotch} from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { whileStatement } from '@babel/types';
import circle from './../assets/circle.png';

function Skill(props) {

  return (

    <div class="skills-container">
        <FaCircleNotch class="skills-icon" style={{color:'#B39E29'}}/>
        <p class="skills-text">{props.value}</p>

    </div>

    );
  }

export default Skill;