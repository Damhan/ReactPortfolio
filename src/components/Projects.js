import React from 'react';
import './../App.css';
import dba from '../assets/DublinBusAssist.png';
import portfolio from '../assets/portfolio.PNG';
import serify from '../assets/serify.png';
import { Card } from 'antd';


function Projects() {

  const { Meta } = Card;


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
        <div className="wrapper-ex">
        <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
            <img alt="example" src="https://i.imgur.com/dOwjrrl.png" className="test-img"/>
            <div className="overlay">
              <p className="example-text">Example</p>
            </div>
        </div>
      </div>


        <div className="wrapper-ex">
          <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
              <img alt="example" src="https://i.imgur.com/iYcqYc6.png" className="test-img"/>
              <div className="overlay">
                <p className="example-text">Example</p>
              </div>
        </div>
      </div>

      <div className="wrapper-ex">
          <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
              <img alt="example" src={serify} className="test-img"/>
              <div className="overlay">
                <p className="example-text">Example</p>
              </div>
        </div>
      </div>

      </div> 
    </div>
  );
}

export default Projects;
