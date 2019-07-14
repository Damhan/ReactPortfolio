import React from 'react';
import './../App.css';
import Skill from './Skill';
import ExperienceCard from './ExperienceCard';

function Experience() {

  const capitaText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  const dublinText= `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  return (
    <div class="container">
      <div class="row text-left" style={{marginTop:'10vh'}}>
        <div class="col">
          <h2 id="skill-header">Skills</h2>
          <hr/>
        </div>
      </div>
      <div class="row" style={{marginTop:'5vh'}}>
        <div class="col">

          
          <div class="skills-wrapper text-left">
            <h3 class="skills-title">Frontend</h3>
            <Skill className="text-left" value={"React"}/>
            <Skill className="text-left" value={"Android"}/>
            <Skill className="text-left" value={"Bootstrap"}/>
            <Skill className="text-left" value={"HTML/CSS3"}/>
            
          </div>
          
        </div>
        <div class="col">
          
          <div class="skills-wrapper text-left">
            <h3 class="skills-title">Backend</h3>
            <Skill className="text-left" value={"Node"}/>
            <Skill className="text-left" value={"Python"}/>
            <Skill className="text-left" value={"Java"}/>
            <Skill className="text-left" value={"SQL"}/>
            
          </div>
        </div>
        <div class="col">
          
          <div class="skills-wrapper text-left">
            <h3 class="skills-title">Other</h3>
            <Skill className="text-left" value={"Git"}/>
            <Skill className="text-left" value={"Jira"}/>
            <Skill className="text-left" value={"AWS"}/>  
            
          </div>
        </div>
      </div>

    <div class="row text-left" style={{marginTop:'10vh'}}>
      <div class="col">
        <h2 id="skill-header">Experience</h2>
        <hr class="experience"/>
      </div>
    </div>
    <div class="row">
      {/* <div class="col experience-card" style={{marginTop:'3vh'}}>
        <div class="exp-title-wrapper text-left">
        <h3>Software Developer Intern - Capita IBS</h3>
        <hr class="exp-hr"/>
        <b>April 2018 - September 2018</b>
        <hr class="exp-hr"/>
        </div>
        <div class="exp-content-wrapper">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <hr class="exp-hr"/>
        </div>
        <div class="row">
          <div class="col">
            <h3>Skills Included:</h3>
            <p>
            Java, SqlServer, SQL, CSS3, HTML
            </p>
          </div>
        </div>
        
      </div> */}
      <ExperienceCard 
      title={'Software Developer Intern - Capita IBS'}
      duration={'April 2018 - September 2018'}
      mainText={capitaText}
      skills={'Java, SQL, SQLServer, HTML, CSS3. '}
      />
    </div>
    <div class="row">  
      <ExperienceCard 
        title={'Office IT Support & Admin - Dublin Neon Co.'}
        duration={'March 2017 - September 2017'}
        mainText={dublinText}
        skills={'Microsoft Office, Windows'}
        />
    </div>
  </div>
  );
}

export default Experience;
