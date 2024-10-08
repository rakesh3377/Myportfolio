import React from "react";
import avator from '../assets/avator.png'

function About(){
    return(
        <>
        <section id="about">
            <div className="container" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <img src={avator} alt="img"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-4">
                        <h1 className="text-center display-5">Hi, I'm Rakesh, Nice to meet you!</h1>
                        <p className="text-justify text-center">I am a front-end developer skilled in <span>React.js</span>. I focus on creating fast, responsive, and easy-to-use web applications. I have a good understanding of <span>JavaScript</span>, <span>HTML</span>, and <span>CSS</span>. I enjoy working with teams and always look for ways to improve the user experience. My goal is to build web solutions that are both user-friendly and meet business needs.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default About;