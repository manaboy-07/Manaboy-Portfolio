/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBroom, FaGlasses } from "react-icons/fa";
import "../styles/Nav.css";
import {
  BsHouseDoorFill,
  BsFillCursorFill,
  BsFillPersonFill,
  BsBagCheckFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { useState } from "react";
function Nav() {
  const [show, setShow] = useState(false);
  const [bars, setBars] = useState(true);
  const trueShow = () => {
    setShow(true);
  };
  const falseShow = () => {
    setShow(false);
    showBars();
  };

  const showBars = () => {
    setBars(!bars);
  };
  return (
    <div>
      <div>
        <nav className='hidden lg:block bg-base-100'>
          <div className='flex justify-between p-2 big-nav'>
            <div className='logo'>
              <h1 className='text-primary'>MANA-BOY</h1>
            </div>
            <ul className='text-primary'>
              <li className='hover:font-extrabold'>
                <Link to='/'>Home</Link>
              </li>
              <li className='hover:font-extrabold'>
                <Link to='/about'>About</Link>
              </li>
              <li className='hover:font-extrabold'>
                <Link to='/contact'>Contact</Link>
              </li>
              <li className='hover:font-extrabold'>
                <Link to='/services'>Services</Link>
              </li>
              <li className='hover:font-extrabold'>
                <Link to='/projects'>Projects</Link>
              </li>
              <li className='hover:font-extrabold'>
                <Link to='/experience'>Experience</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='sm:block lg:hidden '>
        <div className={show ? "myNav " : "hide-nav"}>
          <div className='icon-container'>
            <Link
              to='/'
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
              <BsHouseDoorFill
                className='nav-icon cursor-pointer '
                onClick={falseShow}
              />
              <p> Home</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link
              to='/contact'
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
              <BsFillCursorFill
                className='nav-icon cursor-pointer '
                onClick={falseShow}
              />
              <p> Contact</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link
              to='/about'
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
              <BsFillPersonFill
                className='nav-icon cursor-pointer'
                onClick={falseShow}
              />
              <p> About</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link
              to='/services'
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
              <BsBagCheckFill
                className='nav-icon cursor-pointer '
                onClick={falseShow}
              />
              <p> Services</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link
              to='/projects'
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
              <FaBroom
                className='nav-icon cursor-pointer'
                onClick={falseShow}
              />
              <p>Projects</p>
            </Link>
          </div>
          <div className='icon-container'>
            <Link
              to='/experience'
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
              <FaGlasses
                className='nav-icon cursor-pointer'
                onClick={falseShow}
              />
              <p>Experience</p>
            </Link>
          </div>
        </div>
        <div onClick={showBars}>
          {bars ? (
            <FaBars
              className='nav-icon bars cursor-pointer'
              onClick={trueShow}
            />
          ) : (
            <BsFillXCircleFill
              className='nav-icon bars cursor-pointer'
              onClick={falseShow}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
