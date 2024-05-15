import React from "react";
import { useLocation } from "react-router-dom";
import "./PortfolioPage.css"; // Import CSS file for styling
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import AwardsComponent from "./AwardsComponent"; // Import the AwardsComponent
import ContactMe from "./Contactme";

function PortfolioPage() {
  const location = useLocation();
  const {
    email,
    github,
    linkedin,
    phone,
    name,
    video,
    skills,
    projects,
    awards, // Make sure awardsImage is received from location.state.formData
    roleDescription,
    resume,
  } = location.state.formData;
// console.log(awardsImage,"atport");

console.log(video);
  return (
    <div className="portfolio-container drop-shadow-lg border shadow-md">
      <HeroSection name={name} videoLink={video} />
      <About roledescription={roleDescription} />

      <Skills skills={skills} />

      <Project projects={projects} />

      {/* Pass awardsImage to AwardsComponent */}
      <AwardsComponent awards={awards} /> 

      <ContactMe
        email={email}
        github={github}
        linkedin={linkedin}
        phone={phone}
        name={name}
        resume={resume}
      />
    </div>
  );
}

export default PortfolioPage;