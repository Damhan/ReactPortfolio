import React from 'react';
import './../App.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import dba from '../assets/DublinBusAssist.png';
import portfolio from '../assets/portfolio.PNG';
import notes from '../assets/reactNotes.PNG';
function Projects() {

  return (
    <div class="container-flud padded-main-content">
       <div class="row">
        
        <div class="col projects-title-text">
          <p id="project-title">
            You can view all my work on 
             <a class="proj-git-link" href='https://www.github.com/damhan' style={{ textDecoration: 'none'}}> Github</a></p>
        </div>

      </div>

      <div class="row" style={{'padding-top':"5vh", paddingLeft:"5vw", paddingRight:"5vw" , justifyContent:'space-around'}} align="center" >

        <div class="col card-col" align="center" style={{marginTop:'10vh'}}>
          <Card shadow={5} style={{minWidth:'200px', maxWidth:'400px'}} className="project-card">
            <Card.Title style={{color:'#fff',height:'200px', backgroundImage:'url(' + dba + ')', backgroundSize:'cover'}} />
            <Card.Body className="text-left">
              <Card.Text>
                Dublin Bus Asssist. <br/>
                Details here.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-left">
              <Card.Link href='#'>Github</Card.Link>
            </Card.Footer>
          </Card>
        </div>

        <div class="col card-col" align="center" style={{marginTop:'10vh'}}>
          <Card  shadow={5} style={{minWidth:'300px', maxWidth:'400px'}} className="project-card">
            <Card.Title style={{color:'#fff',height:'200px', backgroundImage:'url(' + portfolio + ')', backgroundSize:'cover'}} />
            <Card.Body>
              <Card.Text>
                [placeholder]React notes here. <br/>
                Details here.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-left">
                <Card.Link href='#'>Github</Card.Link>
            </Card.Footer>
          </Card>
      </div>

        <div class="col card-col" align="center" style={{marginTop:'10vh'}}>
          <Card shadow={5} style={{minWidth:'300px', maxWidth:'400px'}} className="project-card">
            <Card.Title style={{color:'#fff',height:'200px', backgroundImage:'url(' + notes + ')', backgroundSize:'cover'}} />
            <Card.Body>
              <Card.Text>
                React Portfolio website <br/>
                Details here.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-left">
              <Card.Link href='#'>Github</Card.Link>
            </Card.Footer>
          </Card>
        </div>
      </div> 
    </div>
  );
}

export default Projects;
