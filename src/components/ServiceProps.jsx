/** @format */

import React from "react";
import "../styles/Service.css";

function ServiceProps({ title, icon, description }) {
  return (
    <div className='service-p service-box'>
      <div className='service-header  text-2xl text-primary px-3'>
        <div className='icon text-3xl mr-2 '>{icon}</div>
        <div className='title font-extrabold text-black  ml-2  '>{title}</div>
      </div>
      <div className='description py-4 text-black mt-4'>{description}</div>
    </div>
  );
}

export default ServiceProps;
