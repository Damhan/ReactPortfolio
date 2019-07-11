import React from 'react';
import './../App.css';
import {FaCircleNotch} from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import Skill from './Skill';

function Home() {
  return (
    <div class="container-fluid padded-main-content">
        <div class="row row-no-gutter">
            <div class="col main-text text-left">
                <p class="home-banner">I'm Damhan Richardson.</p>
                <p class="home-banner-subtext">I'm a software developer located in Dublin Ireland.</p>
                <div class="skills-div">

                    <p class="skills-title">Skills & Tools</p>

                    <p>FrontEnd</p>
                    <Skill class="skills-container" value={"Android"}/>
                    <Skill class="skills-container" value={"ReactJs"}/>
                    <Skill class="skills-container" value={"HTML/CSS3"}/>
                    
                    <p>Backend</p>
                    <Skill class="skills-container" value={"Java"}/>
                    <Skill class="skills-container" value={"Python"}/>
                    <Skill class="skills-container" value={"Javascript"}/>
                    
                    <p>Tools</p>
                    <Skill class="skills-container" value={"Github"}/>
                    <Skill class="skills-container" value={"Jira"}/>
                    
                </div>
            </div>
            <div class="col main-text">
                <img src="me.jpg" class="header-img"/>
                <div class="container">
                    <div class="row">
                        <div class="col social-icon">
                            <SocialIcon class="social-icon" url="https://www.linkedin.com/in/damhan-richardson-2a597a115/" bgColor="#B39E29" />
                            <SocialIcon class="social-icon" url="https://github.com/Damhan" bgColor="#B39E29" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
 