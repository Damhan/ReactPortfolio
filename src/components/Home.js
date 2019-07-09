import React from 'react';
import './../App.css';

function Home() {
  return (
    <div class="container-fluid padded-main-content">
        <div class="row row-no-gutter">
            <div class="col main-text text-left">
                <p class="home-banner">I'm Damhan Richardson.</p>
                <p class="home-banner-subtext">I'm a software developer located in Dublin Ireland.</p>
                <div class="skills-div">
                    <p class="skills-title">Skills & Tools</p>

                </div>
            </div>
            <div class="col main-text">
                <img src="me.jpg" class="header-img"/>
            </div>
        </div>
    </div>
  );
}

export default Home;
 