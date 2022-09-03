/** @format */

import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='text-black bg-accent p-4 w-full'>
      <h3 className='font-bold text-center text-xl'>
        Copyright &copy; | Made with ❤ by Manasseh | {year}
      </h3>
    </div>
  );
}

export default Footer;
