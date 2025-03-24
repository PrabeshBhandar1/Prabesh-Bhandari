// components/Expertise.js
import React from "react";
import { Helmet } from "react-helmet-async";

const Expertise = () => {
  return (
    <>
      {/* <Helmet>
        <title>Prabesh | Expertise</title>
      </Helmet> */}
      <div className="about-wrapper">
        <div className="about-me">
          <a name="expertise" id="expertise"></a>
          <h4>TOP EXPERTISE</h4>

          <p>
            Web developer with primary focus on front-end:{" "}
            <a target="_blank" href="Prabesh_Bhandari_CV.pdf">
              <br /> Download CV
            </a>
          </p>

          <div id="skills">
            <ul>
              <li>
                <i className="bx bxl-html5"></i>HTML
              </li>
              <li>
                <i className="bx bxl-css3"></i>CSS
              </li>
            </ul>

            <ul>
              <li>
                <i className="bx bxl-react"></i>React (Learning){" "}
              </li>
              <li>
                <i className="bx bxl-nodejs"></i>NodeJs (Learning)
              </li>
            </ul>

            <ul>
              <li>
                <i className="bx bxl-javascript"></i>JavaScript (Learning)
              </li>
              <li>
                <i className="bx bxl-python"></i>Python (Basic)
              </li>
            </ul>

            <ul>
              <li>
                <i className="bx bxl-adobe"></i>Abode Illustrator
              </li>
              <li>
                <i className="bx bxl-microsoft"></i>Microsoft Office
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
