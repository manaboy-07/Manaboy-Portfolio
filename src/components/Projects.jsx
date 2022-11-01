/** @format */

import React from "react";
import ProjectProps from "./ProjectProps";
import todo from "../images/todo.JPG";
import meme from "../images/meme.JPG";
import aos from "../images/aos.JPG";
import calc from "../images/calc.JPG";
import filter from "../images/filter.JPG";
import greek from "../images/greek.JPG";
function Projects() {
  return (
    <div className='projects'>
      <ProjectProps
        description='Meme-Generator '
        link='https://meme-gen-gamma.vercel.app/'
        src={meme}
      />
      <ProjectProps
        description='Tip Calculator'
        src={calc}
        link='https://tip-calculator-silk.vercel.app/'
      />
      <ProjectProps
        description='Filter Api Project'
        src={filter}
        link='https://filter-api.vercel.app/'
      />
      <ProjectProps
        description='Greek Mythology Quiz'
        src={greek}
        link='https://greek-mythology-quiz-app.vercel.app/'
      />
      <ProjectProps
        description='AOS website '
        src={aos}
        link='https://website-using-aos-lib.vercel.app/'
      />
      <ProjectProps
        description='Todo List'
        link='https://todo-list-manaboy-07.vercel.app/'
        src={todo}
      />
    </div>
  );
}

export default Projects;
