/** @format */

import React from "react";

function Error() {
  return (
    <div className='error-page'>
      <div className='error-content'>
        <div className='error-img'>{/* an error gif or image */}</div>
        <p className='error-text'>Looks like you ran into some trouble 😢</p>
        <p>
          <small className='text-2xl'>Error 404</small>
        </p>
        <p>Page not found or Network error</p>
      </div>
    </div>
  );
}

export default Error;
