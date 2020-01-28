import React from 'react';
import './../App.css';
import Card from 'react-bootstrap/Card';
import dba from '../assets/DublinBusAssist.png';
import portfolio from '../assets/portfolio.PNG';
import serify from '../assets/serify.png';
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

        <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
          <Card  shadow={5} style={{minWidth:'300px', maxWidth:'400px'}} className="project-card">
            <Card.Title style={{color:'#fff',height:'200px', backgroundImage:'url(' + portfolio + ')', backgroundSize:'cover'}} />
            <Card.Body>
              <Card.Text>
                React Personal Portfolio Website <br/>
                Built using React,HTML/CSS3 & Bootstrap.<br/>
                Showcases my work & skills with a clean, functional design.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-left">
                <Card.Link href='https://github.com/Damhan/ReactPortfolio'>Github</Card.Link>
            </Card.Footer>
          </Card>
      </div>

      <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
          <Card shadow={5} style={{minWidth:'300px', maxWidth:'400px'}} className="project-card">
            <Card.Title style={{color:'#fff',height:'200px', backgroundImage:'url(' + serify + ')', backgroundSize:'cover'}} />
            <Card.Body>
              <Card.Text>
                SPA for exploring books written in React Hooks. <br/>
                Styled with Sass and bundled with webpack. <br/>
                Deployed on github pages, users can search, order books by date and length.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-left">
              <Card.Link href='https://github.com/Damhan/Serify'>Github</Card.Link>
              <Card.Link href='https://damhan.github.io/Serify'>View on gh-pages</Card.Link>
            </Card.Footer>
          </Card>
        </div>

      <div class="col card-col" align="center" style={{marginTop:'10vh'}}>
          <Card shadow={5} style={{minWidth:'200px', maxWidth:'400px'}} className="project-card">
            <Card.Title style={{color:'#fff',height:'200px', backgroundImage:'url(' + dba + ')', backgroundSize:'cover'}} />
            <Card.Body className="text-left">
              <Card.Text>
                Android application for Dublin Bus<br/>
                Built using android, XML & SOAP<br />
                Provides bus real-time data alongside a prediction if the time is reliable.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-left">
              <Card.Link href='https://github.com/Damhan/DublinBusAssist'>Github</Card.Link>
            </Card.Footer>
          </Card>
        </div>

      </div> 
    </div>
  );
}

export default Projects;
