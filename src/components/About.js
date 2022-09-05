/** @format */

import React from "react";
import "../styles/About.css";
import img from "../images/portfolio2.jpg";
function Navbar() {
  return (
    <div className='about-container '>
      <div className='about '>
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
        <p className='font-extrabold'>Simply put Coding is my Passion ❤</p>
      </div>

      <div className='container about-page '>
        <img src={img} alt='me' />
        <p>I look good with a computer don't i ? 🤪👨‍💻👨‍💻</p>
      </div>
    </div>
  );
}

export default Navbar;
