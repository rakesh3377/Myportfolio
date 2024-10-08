import React from "react";
import skillsdata from "./skillsdata.json";

function Skills() {
  return (
    <>
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skillsdata.map((data) => (
          <>
            <div
              className="item"
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={data.img} alt="img" />
              <h3>{data.title}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  </>
  );
}

export default Skills;
