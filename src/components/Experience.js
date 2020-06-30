import React from 'react';
import './../App.css';
import Skill from './Skill';
import ExperienceCard from './ExperienceCard';
import website from '../assets/Website.svg';
import ecommerce from '../assets/Ecommerce.svg';
import seo from '../assets/SEO.svg';
import mobile from '../assets/Mobile Payment.svg';
import budget from '../assets/Budget.svg';
import contract from '../assets/Software Companes.svg';

function Experience() {

  const capitaText = `Worked on production code, developing webapp bespoke business solutions.
  My role involved developing features assigned to me & writing unit tests for my features. 
  Solutions were built with an inhouse java framework & styled with CSS3. Features were populated from a SQL Server where I had to create tables & relationships from scratch.
  I was also tasked with assisting new hires with getting them up to speed and troubleshooting any problems they had.`

  const dublinText= `Maintained office computers to include setup, software installation & error troubleshooting.
  Provided technical support & ensured a smooth workflow. 
  Worked with windows, microsoft office, adobe and inhouse design & production software.`

  return (
    <div>
      <div className="container">


        <div className="row services-container" style={{paddingTop:"10vh"}}>
          
          <div className="col">
            <div className="service-container text-center">
              <img src={website} className="service-icon" alt="Landing svg"/>
              <div className="heading-container">
                <h2>Web Design and Development</h2>
              </div>
              <div className="body-container">
                <p>Custom, modern and responsive designs, optimized for performance, search engines and converting clicks to users.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="service-container text-center">
              <img src={ecommerce} className="service-icon" alt="Landing svg"/>
              <div className="heading-container">
                <h2>Ecommerce solutions</h2>
              </div>
              <div className="body-container">
                <p>Custom ecommerce websites, available on all major platforms. Easily edit modify and update your store.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="service-container text-center">
              <img src={seo} className="service-icon" alt="Landing svg"/>
              <div className="heading-container">
                <h2>Performance and SEO Analysis</h2>
              </div>
              <div className="body-container">
                <p>Analyse and solve your websites performance issues, loading times and SEO.</p>
              </div>
            </div>
          </div>
        </div>



        <div className="row services-container">
          <div className="col">
              <div className="service-container text-center">
                <img src={mobile} className="service-icon" alt="Landing svg"/>
                <div className="heading-container">
                  <h2>Mobile Development</h2>
                </div>
                <div className="body-container">
                  <p>Create a mobile application that fulfills your needs ensuring ease of use and simplicity for your audience.</p>
                </div>
              </div>
            </div>

         <div className="col">
              <div className="service-container text-center">
                <img src={budget} className="service-icon" alt="Landing svg"/>
                <div className="heading-container">
                  <h2>Affordable solutions</h2>
                </div>
                <div className="body-container">
                  <p>Create a website that represents your brand for an affordable price on a range of platforms.</p>
                </div>
              </div>
         </div>

          <div className="col">
              <div className="service-container text-center">
                <img src={contract} className="service-icon" alt="Landing svg"/>
                <div className="heading-container">
                  <h2>Affordable solutions</h2>
                </div>
                <div className="body-container">
                  <p>Create a website that represents your brand for an affordable price on a range of platforms.</p>
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Experience;
