import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Projects() {
  return (
    <div class="container-flud padded-main-content">
      <div class="row">
        
        <div class="col projects-title-text">
          <p>You can view all my work on github.</p>
        </div>
        
        <div class="col" align="center">
          <Card style={{width:'24rem'}}>
            <Card.Img varient="top" src={require('../DublinBusAssist.png')}/>
            <Card.Body>
              <Card.Text>
                Dublin Bus Asssist. <br/>
                Details here.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div class="row">
        <div class="col" align="center">
        <Card style={{width:'24rem'}} >
            <Card.Img varient="top" src={require('../DublinBusAssist.png')}/>
            <Card.Body>
              <Card.Text>
                Dublin Bus Asssist. <br/>
                Details here.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div class="col" align="center">
        <Card style={{width:'24rem'}}>
          <Card.Img varient="top" src={require('../DublinBusAssist.png')}/>
            <Card.Body>
              <Card.Text>
                Dublin Bus Asssist. <br/>
                Details here.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
