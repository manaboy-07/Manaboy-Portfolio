/** @format */

import React from "react";
import ServiceProps from "./ServiceProps";

import "../styles/Service.css";
import {
  FaHtml5,
  FaAngular,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaDesktop,
} from "react-icons/fa";
import { BsLaptop, BsLightbulb } from "react-icons/bs";
function Services() {
  return (
    <div className='services'>
      <div className='skills '>
        <h1 className='text-3xl font-bold text-primary px-5 py-6 text-center'>
          My skills include:
        </h1>
        <div className='stage-cube-cont mb-7 '>
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

      <div className='service-headers font-bold  py-15 px-6 mt-60'>
        <h1 className='text-primary text-center text-3xl'>What I Do </h1>
        <h3 className='description text-center text-xl p-3'>
          I am much obliged to your services and desires.
          <br />
          I've got you covered on design and development in the digital world
        </h3>
      </div>

      <div className='service-contents pt-10'>
        <ServiceProps
          icon={<BsLaptop />}
          title={"Responsive Web Design"}
          description={
            "Responsive design , a web development approach that creates dynamic changes to the appearance if a website, regardless of the screen size and orientation of the device. I develop and design the best mobile friendly sites using my knowledge on web development."
          }
        />
        <ServiceProps
          icon={<BsLightbulb />}
          title={"Dynamic Web Pages"}
          description={
            "Anyone can create a static web page with just html and css , however I can create pages that interact with the user thus enhancing optimization"
          }
        />
        <ServiceProps
          icon={<FaDesktop />}
          title={"Web Design"}
          description={
            "Your website is the most visible part of your buisness. No matter the size of your business a beautiful website attracts users and reflects the unique character of what you do."
          }
        />
      </div>
    </div>
  );
}

export default Services;
