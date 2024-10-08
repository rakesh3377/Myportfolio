import React from "react";
import projectsdata from "./projectsdata.json";
import { HiEye } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects">
    <div>
      <h1 className="text-center">Projects</h1>
    </div>
      <div className="container mt-5">
        <div className="row px-3">
          {projectsdata.map((data, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card py-2" style={{ width: "100%" }} data-aos="flip-right" data-aos-duration="1000">
                <img src={data.image} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.content}</p>
                  <a href={data.link} target="_blank" className="btn btn-primary mx-2"><HiEye style={{fontSize:"20px"}}/>
                    <span>Demo</span>
                  </a>
                  <a href={data.gitlink} target="_blank" className="btn gitbtn"><FaCode style={{fontSize:"20px"}}/>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
