// components/Education.js
import React from "react";
import samriddhiLogo from "../assets/samriddhi.webp";
import milestoneLogo from "../assets/milestone.webp";
import paribartan from "../assets/circle-logo-boarding.png";
import { Helmet } from "react-helmet-async";
const Education = () => {
  return (
    <>
      {/* <Helmet>
        <title>Prabesh | Education</title>
      </Helmet> */}
      <a name="projects" id="projects"></a>
      <h3 className="education-title">Education</h3>
      <div className="education-wrapper">
        <div className="education-item">
          <img src={samriddhiLogo} alt="Samriddhi College" />
          <div className="education-info">
            <h4>Samriddhi College</h4>
            <p>(BCA)</p>
            <p>Bachelor</p>
            <p>2023 - Present</p>
          </div>
        </div>
        <div className="education-item">
          <img src={milestoneLogo} alt="Milestone Int'l School" />
          <div className="education-info">
            <h4>Milestone Int'l School</h4>
            <p>(Computer Science)</p>
            <p>High School (+2)</p>
            <p>2021 - 2023</p>
          </div>
        </div>
        <div className="education-item">
          <img src={paribartan} alt="Paribartan Eng. School" />
          <div className="education-info">
            <h4>Paribartan Eng. School</h4>
            <p>Primary School</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
