/** @format */

import React from "react";
import pic from "../images/portfolio1.jpg";
import "../styles/Home.css";
function Home() {
  const tech = (topic) => {
    return <div className='tech py-2 px-3 mt-2 mr-4'>#{topic}</div>;
  };
  return (
    <div className='home-div'>
      <div className='info '>
        <h1 className='font-bold text-4xl text-primary py-3'>
          Hi there 👋 ,<h2 className='text-7xl '>I'm Manasseh</h2>
        </h1>
        <small className='text-sm text-secondary  py-4'>
          A Front-end developer but starting backend soon 😁😁😁 so i guess i
          can say i'm a fullstack developer.
          <p className='text-sm'>{tech("Coding")}</p>
          <p className='text-sm'>{tech("Animation")}</p>
          <p className='text-sm'>{tech("Web Design")}</p>
          <p className='text-sm'>{tech("Front-end")}</p>
          <p className='text-sm'>{tech("Back-end")}</p>
        </small>
        <h3 className='text-primary font-semibold  py-5'>
          I build top notch web applications using upcoming and popular
          libraries , frameworks and the best technologies
          <h4 className='text-xl py-6 '>
            Cool Animations, Awesome Designs and more
          </h4>
        </h3>
      </div>
      <div className='home-img'>
        <img src={pic} alt='manasseh' className='img-home' />
      </div>
    </div>
  );
}

export default Home;
