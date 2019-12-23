import React from 'react';
import './../App.css';

function ExperienceCard(props) {

  return (

    <div class="col experience-card" style={{marginTop:'3vh'}}>
      
        <div class="exp-title-wrapper text-left">
          <h3 class="exp-title">{props.title}</h3>
          <h3 class="exp-title">{props.duration}</h3>
        </div>
        
        <div class="exp-content-wrapper text-left">
          <p class="exp-maintext">{props.mainText}</p>
        </div>
        
        <div class="row">
          <div class="col text-left">
            <h3 class="exp-title">Skills Included:</h3>
            <p class="exp-maintext">
            {props.skills}
            </p>
          </div>
        </div>
      </div>

    );
  }

export default ExperienceCard;