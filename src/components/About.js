/** @format */

import React from "react";
import "../styles/About.css";
import {
  FaHtml5,
  FaAngular,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
function Navbar() {
  return (
    <div className='about-container '>
      <div className='about p-5 '>
        <h1 className='about-header text-5xl text-primary'>About Me</h1>
        <p className='text-secondary whitespace-normal py-4'>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p className='text-secondary whitespace-normal py-5'>
          I am outgoing, dedicated, and open-minded.I get across to people and
          adjust to changes with ease.I believe that a person should work on
          developing their professional skills and learning new things all the
          time.Currently, I am looking for new career opportunities my current
          job position cannot provide.
        </p>
      </div>

      <div className='container about-page p-5'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FaHtml5 color='#F06529' />
            </div>
            <div className='face2'>
              <FaAngular color='#e11d48' />
            </div>
            <div className='face3'>
              <FaCss3Alt color='#28A4D9' />
            </div>
            <div className='face4'>
              <FaJsSquare color='#EFD81D' />
            </div>
            <div className='face5'>
              <FaReact color='#5ED4F4' />
            </div>
            <div className='face6'>
              <FaGitAlt color='#Ec4d28' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
