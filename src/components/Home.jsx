import React from "react";
import hero from "../assets/hero2.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Home() {
  const [text, count] = useTypewriter({
    words: ["Frontend Developer", "React js Developer"],
    loop: 0,
    typeSpeed: 100,
    delaySpeed: 50,
  });

  return (
    <section className="Home-section d-flex justify-content-center align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12 pt-5" data-aos="fade-up-right" data-aos-duration="1000">
            <h1 className="display-3 title">
              Hi, <br />
              <span>I am Rakesh</span>
            </h1>
            <p className="my-lg-2 my-3 display-5">
              I'm a{" "}
              <span style={{ fontWeight: "bold", color: "#cd5ff8" }}>{text}</span>
              <Cursor cursorStyle=">" className="display-5 bold" />
            </p>
            <div className="social-link">
              <span className="icons"><a href="https://www.linkedin.com/in/rakesh-h-b2026a300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><CiLinkedin /></a></span>
              <span className="icons"><a href="https://x.com/" target="_blank"><FaXTwitter /></a></span>
              <span className="icons"><a href="https://github.com/rakesh3377" target="_blank"><FaGithub /></a></span>
              
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center imgage" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={hero} alt="img" className="heroimg" style={{width: '100%'}}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
