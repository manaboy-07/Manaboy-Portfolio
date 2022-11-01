/** @format */

import React from "react";
import "../styles/Experience.css";
import hustle from "../images/hustle.JPG";
import aptech from "../images/aptech.JPG";
import Kode from "../images/kodecamp.JPG";
function Experience() {
  return (
    <div>
      <h1 className='text-primary text-extrabold text-3xl text-center p-4 m-4'>
        Experience
      </h1>

      <section className='companies'>
        <div className='exp-box'>
          <div className='img-header'>
            <h1 className='text-2xl exp-header text-primary'>
              {" "}
              Aptech Computer Education
            </h1>
            <img src={aptech} alt='' />
          </div>
          <p>Started Coding in aptech and learnt html, css and Javascript</p>
          <p>
            Aptech is a computer education training body that develops skills of
            individuals and makes them <br /> useful to the digital and
            technology world.
          </p>
          <p>
            My journey began with them and i have been coding for one year now
          </p>
        </div>

        <div className='exp-box'>
          <div className='img-header'>
            <h1 className='text-2xl exp-header text-primary'>
              {" "}
              Kode-Camp
            </h1>
            <img src={Kode} alt='' />
          </div>
          <p>Kode-camp is a cohort tech internship</p>
          <p>
            After learning html and css, i enrolled under the beginner front-end
            track and built html and css projets{" "}
          </p>
          <p>
            I learnt how to build forms , cool web animations with css and
            amazing landing pages
          </p>
        </div>

        <div className='exp-box'>
          <div className='img-header'>
            <h1 className='text-2xl exp-header text-primary'>
              {" "}
              Side-hustle
            </h1>
            <img src={hustle} alt='' />
          </div>
          <p>The side hustle Internship is a free cohort tech body</p>
          <p>
            During this cohort i learnt the basics of react and built my first
            real world projects. I also learnt the use git and github and
            accquired knowledge on deploying websites
          </p>
        </div>
      </section>
    </div>
  );
}

export default Experience;
