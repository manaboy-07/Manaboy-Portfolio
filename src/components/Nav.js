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
        <nav className='hidden lg:block bg-neutral'>
          <div className='flex justify-between p-2 big-nav'>
            <div className='logo'>
              <h1 className='text-primary'>Manasseh</h1>
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
            <Link to='/'>
              <BsHouseDoorFill
                className='nav-icon cursor-pointer '
                onClick={falseShow}
              />
              <p> Home</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link to='/contact'>
              <BsFillCursorFill
                className='nav-icon cursor-pointer '
                onClick={falseShow}
              />
              <p> Contact</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link to='/about'>
              <BsFillPersonFill
                className='nav-icon cursor-pointer'
                onClick={falseShow}
              />
              <p> About</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link to='/services'>
              <BsBagCheckFill
                className='nav-icon cursor-pointer '
                onClick={falseShow}
              />
              <p> Services</p>
            </Link>
          </div>
          <div className='icon-container '>
            <Link to='/projects'>
              <FaBroom
                className='nav-icon cursor-pointer'
                onClick={falseShow}
              />
              <p>Projects</p>
            </Link>
          </div>
          <div className='icon-container'>
            <Link to='/experience'>
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
