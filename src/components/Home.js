import React from 'react';
import './../App.css';
import { SocialIcon } from 'react-social-icons';
import TextLoop from 'react-text-loop';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function Home(props) {

    
  return (
    <div class="container-fluid padded-main-content">
        <div class="row">
            <div class="col main-text text-left align-self-center">
                <div class="lander-title">
                    <p class="home-banner">I'm Damhan Richardson.</p>
                    <p class="home-banner-subtext">I'm a <TextLoop interval={2000}>
                                                            <span class="loop-items">[React]</span>                                                           
                                                            <span class="loop-items">[SQL]</span>
                                                            <span class="loop-items">[React-Native]</span>
                                                            <span class="loop-items">[Javascript]</span>
                                                            <span class="loop-items">[Java]</span>
                                                            <span class="loop-items">[Python]</span>
                                                        </TextLoop> developer located in Vancouver, BC.</p>
                    <Button type="primary lander-link " size="large" style={{fontWeight:500}}danger onClick={()=> {props.history.push('Projects')}} >PROJECTS</Button>
                </div>
                
            </div>
            <div class="col main-text">
                {/* <img src="me.jpg" class="header-img" alt="damhan headshot"/> */}

                <div class="container">
                    <div className="row">
                        <div className="col">
                            <img src="responsive_final.svg" class="header-img" alt="Landing svg"/>
                            <p className="home-banner-subtext">I develop responsive websites fullstack and offer a range of web solutions from
                            web development to general purpose programming.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col social-icon">
                            <SocialIcon className="social-icons" url="https://www.linkedin.com/in/damhan-richardson-2a597a115/" bgColor="currentColor"/>
                            <SocialIcon className="social-icons" url="https://github.com/Damhan" bgColor="currentColor" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
 