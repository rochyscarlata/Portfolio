/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import CV from "../../assets/docs/CV-RosarioScarlata.pdf";

import "./Resume.css";
function Resume() {
  return (
    <div class="container" id="resume">
      <div class="row justify-content-center pb-5">
        <div class="col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated">
          <h1 class="big big-2">Resume</h1>
          <h2 class="mb-4">Resume</h2>
          <p>A bit of my studies in the world of programming</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">2018-2020</span>
            <h2>Superior programming technician</h2>
            <span class="position"></span>
            <p class="mt-4">Universidad Tecnologica Nacional</p>
          </div>
          <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">March-April 2021</span>
            <h2>React Js Developer</h2>
            <span class="position"></span>
            <p class="mt-4">intensive course in Educacion IT</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">2019-2020</span>
            <h2>Full Stack Mern Developer</h2>
            <span class="position"></span>
            <p class="mt-4">Rolling Code School</p>
          </div>
          <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">May 2021</span>
            <h2>React Js Developer</h2>
            <p class="mt-4">
              <span>Coderhouse</span>
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4 mb-4">
        <div class="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
          <p>
            <a
              href={CV}
              target="_blank"
              download="cv-RosarioScarlata"
              class="buttonn button--about-me"
            >
              Download CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
