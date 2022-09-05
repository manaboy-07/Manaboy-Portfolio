/** @format */

import React from "react";

function ServiceProps({ title, icon, description }) {
  return (
    <div className='service-p'>
      <div className='icon'>{icon}</div>
      <div className='title'>{title}</div>
      <div className='des'>{description}</div>
    </div>
  );
}

export default ServiceProps;
