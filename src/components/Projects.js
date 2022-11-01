/** @format */

import React from "react";
import ProjectProps from "./ProjectProps";

function Projects() {
  return (
    <div className='projects'>
      <ProjectProps description='Meme-Generator ' link='https://meme-gen-gamma.vercel.app/' />
      <ProjectProps description='Tip Calculator' link='https://tip-calculator-silk.vercel.app/' />
      <ProjectProps description='Filter Api Project' link='https://filter-api.vercel.app/' />
      <ProjectProps description='Greek Mythology Quiz' link='https://greek-mythology-quiz-app.vercel.app/' />
      <ProjectProps description='AOS website ' link='https://website-using-aos-lib.vercel.app/' />
      <ProjectProps description='Todo List' link='https://todo-list-manaboy-07.vercel.app/' />
    </div>
  );
}

export default Projects;
