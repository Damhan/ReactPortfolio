import React from 'react';
import './../App.css';
import tile1 from '../assets/Tile1.png';
import tile2 from '../assets/Tile2.png';
import tile3 from '../assets/Tile3.png';
import { Card } from 'antd';


function Projects() {

  const { Meta } = Card;


  return (
    <div class="container-flud padded-main-content">

      <div class="row" style={{'padding-bottom':"10vh", paddingLeft:"5vw", paddingRight:"5vw" , justifyContent:'space-around'}} align="center" >
        <div className="wrapper-ex">
        <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
            <img alt="example" src={tile1} className="test-img"/>
            <div className="overlay">
              <a className="example-text" href="https://github.com/Damhan/ReactPortfolio" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
      </div>


        <div className="wrapper-ex">
          <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
              <img alt="example" src={tile2} className="test-img"/>
              <div className="overlay">
              <a className="example-text" href="https://play.google.com/store/apps/details?id=com.damhan.simplibudget" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
        </div>
      </div>

      <div className="wrapper-ex">
          <div class="col card-col text-left" align="center" style={{marginTop:'10vh'}}>
              <img alt="example" src={tile3} className="test-img"/>
              <div className="overlay">
              <a className="example-text" href="https://github.com/Damhan/Serify" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
        </div>
      </div>

      </div>
        <div class="row">
        <div class="col projects-title-text">
          <p id="project-title">
            Explore the rest of my work 
          <a class="proj-git-link" href='https://www.github.com/damhan' style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer"> HERE</a></p>
        </div>
      </div>

    </div>
  );
}

export default Projects;
