/** @format */

import React from "react";
import "../styles/Project.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
function ProjectProps({ description, link }) {
  return (
    <div>
      <div className='project-overview'>
        <h2 className="text-bolder text-2xl">{description}</h2>
        <div className='link-btn mt-4'>
          <a
            href={link}
            target='_blank'
            className='bg-primary p-2 rounded-md text-white'>
            View
            <BsFillArrowUpRightCircleFill className='inline text-xl m-2 text-white' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectProps;
