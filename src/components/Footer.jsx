/** @format */

import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='text-black bg-slate-200 p-4 w-full'>
      <h3 className='font-bold text-center text-xl'>
        Copyright <span className='text-extrabold text-2xl'>©</span> | Made with
        ❤ by Manasseh | {year}
      </h3>
    </div>
  );
}

export default Footer;
