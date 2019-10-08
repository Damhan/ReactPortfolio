import React from 'react';
import './../App.css';
import {FaCircleNotch} from 'react-icons/fa';

function Skill(props) {

  return (

    <div class="skills-container">
        <FaCircleNotch className="skills-icon" style={{color:'#B34E40', marginBottom:'5px'}}/>
        <p class="skills-text">{props.value}</p>

    </div>

    );
  }

export default Skill;