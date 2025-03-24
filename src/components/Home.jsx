// components/Home.js
import React from "react";
import profilePic from "../assets/Prabesh_Bhandari_2.png";
import { Helmet } from "react-helmet-async";

const Home = ({ theme, onThemeChange }) => {
  return (
    <>
      <Helmet>
        <title>Prabesh | Personal Website</title>
      </Helmet>
      <div className="left-column">
        <a name="home" id="home"></a>
        <img id="profile_pic" src={profilePic} alt="Prabesh Bhandari" />
        <h5 style={{ textAlign: "center", lineHeight: 0 }}>Prabesh Bhandari</h5>
        <h5 style={{ textAlign: "center", lineHeight: 0 }}>
          <span className="auto-type"></span>
        </h5>

        <h6 style={{ textAlign: "center", lineHeight: 0 }}>
          <span id="element"></span>
        </h6>

        <div id="theme-options-wrapper">
          <div
            data-mode="blue"
            id="blue-mode"
            className="theme-dot"
            onClick={() => onThemeChange("blue")}
          ></div>
          <div
            data-mode="green"
            id="green-mode"
            className="theme-dot"
            onClick={() => onThemeChange("green")}
          ></div>
          <div
            data-mode="purple"
            id="purple-mode"
            className="theme-dot"
            onClick={() => onThemeChange("purple")}
          ></div>
        </div>

        <p id="settings-note">
          *Choose your theme as you want. Settings will be saved for
          <br />
          your next visit*
        </p>
      </div>

      <div className="right-column">
        <div id="preview-shadow">
          <div id="preview">
            <div id="corner-tl" className="corner"></div>
            <div id="corner-tr" className="corner"></div>
            <h3>WHO AM I ?</h3>
            <p>
              A student passionate about web development, focusing on front-end
              technologies with strong client-side skills.
            </p>
            <div id="corner-br" className="corner"></div>
            <div id="corner-bl" className="corner"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
