import { useState, useEffect } from "react";
import { restBase } from "../utilities/Utilities";
import FeaturedProjects from "../components/FeaturedProjects";
import TechStackLogos from "../components/TechStackLogos";
function PageHome() {
  return (
    <>
        <h1>Front End Web Developer</h1>
        <h2>Hi! I'm Alan</h2>
        <p>Continuing my journey into the web development world. I'm a detail oriented web developer with a 6 year background of Quality Assurance. I'm also passionate about problem solving through code, collaborating with other people and also continously learning on the different web technologies.</p>
        <a href="/experiences" className="button-49">Background</a>
        <a href="/about" className="button-53">My Story</a>
        <TechStackLogos/>
        <FeaturedProjects/>
    </>
  );
}

export default PageHome;
