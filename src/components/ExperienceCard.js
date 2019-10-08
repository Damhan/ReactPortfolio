import React from 'react';
import './../App.css';

function ExperienceCard(props) {

  return (

    <div class="col experience-card" style={{marginTop:'3vh'}}>
        <div class="exp-title-wrapper text-left">
        <h3>{props.title}</h3>
        <hr class="exp-hr"/>
        <b>{props.duration}</b>
        <hr class="exp-hr"/>
        </div>
        <div class="exp-content-wrapper text-left">
          <p>{props.mainText}</p>
             <hr class="exp-hr"/>
        </div>
        <div class="row">
          <div class="col">
            <h3>Skills Included:</h3>
            <p>
            {props.skills}
            </p>
          </div>
        </div>
        
      </div>

    );
  }

export default ExperienceCard;