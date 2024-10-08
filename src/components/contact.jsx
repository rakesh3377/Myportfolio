import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import pdf from "../pdf/Rakesh-resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";

function Contact() {
  return (
    <>
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row arorder1">
            <div className="col-lg-7 col-md-6 col-12 pt-4 py-2">
              <div className="contact-details">
                <h1 className="mb-4">
                  <u>Contact</u>
                </h1>
                <p>
                  <span>Phone:</span> 9176595454
                </p>
                <p>
                  <span>Email:</span>
                  <a href="mailto:rakesh595454@gmail.com"> rakesh595454@gmail.com</a>
                </p>
                <a href={pdf} download="Rakesh-resume.pdf" className="btn btn-danger">Resume<MdOutlineFileDownload style={{fontSize:"35px",paddingBottom:"5px",marginLeft:"5px"}}/></a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12 pt-4 d-flex justify-content-center align-items-center">
              <div className="contact-link d-flex">
                <a className="icons my-2" href="https://github.com/rakesh3377" target="_blank">
                  <FaGithub size={30} />
                </a>
                <a className="icons my-2" href="mailto:rakesh595454@gmail.com" target="_blank">
                  <SiGmail size={30} />
                </a>
                <a className="icons my-2" href="https://www.linkedin.com/in/rakesh-h-b2026a300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <CiLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
