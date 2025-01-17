import React from "react";
import { Line } from "rc-progress";
import { GiSkills } from "react-icons/gi";
import Header from "../../Components/Header/Header";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import './skills.scss';


function Skills() {
  return (
    <section className="skills" id="skills">
      <Header
       headerText="My Skills" 
       icon={<GiSkills  size={40} />} 
       />
      <div className="skills__content-wrapper">
        {
        skillsData.map((item, index) => (
          <div key={index} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ 
                transform: "translateX(-200px)",
               }}
              end={{ 
                transform: "translateX(0px)",
               }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {
                item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p className="skills-item">{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="#ffdd40"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
