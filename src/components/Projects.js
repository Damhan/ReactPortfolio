import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';

function Projects() {
  return (
    <div class="container-flud padded-main-content">
      <div class="row">
        
        <div class="col projects-title-text">
          <p>You can view all my work on github.</p>
        </div>
        
        <div class="col">
          <Button />
        </div>

      </div>

      <div class="row">
        <div class="col">
          <p>Some proj</p>
        </div>

        <div class="col">
          <p>Another proj ere</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
