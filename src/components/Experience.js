import React from 'react';
import './../App.css';
import Skill from './Skill';
import ExperienceCard from './ExperienceCard';

function Experience() {

  const capitaText = `Worked on production code, developing webapp bespoke business solutions.
  My role involved developing features assigned to me & writing unit tests for my features. 
  Solutions were built with an inhouse java framework & styled with CSS3. Features were populated from a SQL Server where I had to create tables & relationships from scratch.
  I was also tasked with assisting new hires with getting them up to speed and troubleshooting any problems they had.`

  const dublinText= `Maintained office computers to include setup, software installation & error troubleshooting.
  Provided technical support & ensured a smooth workflow. 
  Worked with windows, microsoft office, adobe and inhouse design & production software.`

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
      <ExperienceCard 
      title={'Software Developer Intern - Capita IBS'}
      duration={'April 2018 - September 2018'}
      mainText={capitaText}
      skills={'Java, SQL, SQLServer, Git, Jira, CSS3. '}
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
