/** @format */

import React from "react";

import "../styles/Project.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
function ProjectProps({ description, link, src }) {
  return (
    <div>
      <div className='project-overview'>
        <div className='project-flex'>
          <div className='link-btn mt-8'>
            <h2 className='text-bolder text-2xl my-4'>{description}</h2>
            <a
              href={link}
              target='_blank'
              className='bg-primary p-2 rounded-md text-white w-full'>
              View
              <BsFillArrowUpRightCircleFill className='inline text-xl m-2 text-white' />
            </a>
          </div>

          <div>
            <img src={src} alt='' className='img-pro' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectProps;
