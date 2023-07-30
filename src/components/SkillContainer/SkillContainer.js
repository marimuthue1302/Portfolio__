import React from "react";
import { Element } from "react-scroll";
import { LinearProgress } from "@mui/material";
import Skills from "../../assets/images.jpg";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer__image">
        <img src={Skills} alt="" />
      </div>
      <div className="skillcontainer__text">
        <h2>SKILLS</h2>
        <div className="skillcontainer__skillset">
          <h5>HTML</h5>
          <div className="skillcontainer__slider skillcontainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>CSS</h5>
          <div className="skillcontainer__slider skillcontainer__slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>JavaScript</h5>
          <div className="skillcontainer__slider skillcontainer__slider3">
            <LinearProgress variant="determinate" value={85} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>React</h5>
          <div className="skillcontainer__slider skillcontainer__slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
