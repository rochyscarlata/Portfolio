/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import CV from "../../assets/docs/en-CV-ROSARIOSCARLATA.pdf";

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
            <p class="mt-4">Univerisad Tecnologica Nacional</p>
          </div>
          <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">March-April 2021</span>
            <h2>React Js Developer</h2>
            <span class="position"></span>
            <p class="mt-4">intensive course in Educacion IT</p>
          </div>
          <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">2021</span>
            <h2>English course</h2>
            <p class="mt-4">currently studying in Aticana</p>
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
          <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">July 2021</span>
            <h2>UI/UX Designer</h2>
            <span class="position"></span>
            <p class="mt-4">
              <span>Coderhouse - Pending course</span>
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
          <p>
            <a
              href={CV}
              target="_blank"
              download="en-CV-ROSARIOSCARLATA"
              class="buttonn button--about-me"
            >
              Download CV
            </a>
          </p>
        </div>
      </div>
    </div>

    // <section id="education" class="education">
    //   <div className="section-heading text-center">
    //     <h2>education</h2>
    //   </div>
    //   <div className="container">
    //     <div className="education-horizontal-timeline">
    //       <div className="row">
    //         <div className="col-sm-4">
    //           <div className="single-horizontal-timeline">
    //             <div className="experience-time">
    //               <h2>2008 - 2010</h2>
    //               <h3>
    //                 master <span>of </span> computer science
    //               </h3>
    //             </div>
    //             <div className="timeline-horizontal-border">
    //               <i className="fa fa-circle" aria-hidden="true"></i>
    //               <span className="single-timeline-horizontal"></span>
    //             </div>
    //             <div className="timeline">
    //               <div className="timeline-content">
    //                 <h4 className="title">university of north carolina</h4>
    //                 <h5>north carolina, USA</h5>
    //                 <p className="description">
    //                   Duis aute irure dolor in reprehenderit in vol patate velit
    //                   esse cillum dolore eu fugiat nulla pari. Excepteur sint
    //                   occana inna tecat cupidatat non proident.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-sm-4">
    //           <div className="single-horizontal-timeline">
    //             <div className="experience-time">
    //               <h2>2004 - 2008</h2>
    //               <h3>
    //                 bachelor <span>of </span> computer science
    //               </h3>
    //             </div>
    //             <div className="timeline-horizontal-border">
    //               <i className="fa fa-circle" aria-hidden="true"></i>
    //               <span className="single-timeline-horizontal"></span>
    //             </div>
    //             <div className="timeline">
    //               <div className="timeline-content">
    //                 <h4 className="title">university of north carolina</h4>
    //                 <h5>north carolina, USA</h5>
    //                 <p className="description">
    //                   Duis aute irure dolor in reprehenderit in vol patate velit
    //                   esse cillum dolore eu fugiat nulla pari. Excepteur sint
    //                   occana inna tecat cupidatat non proident.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-sm-4">
    //           <div className="single-horizontal-timeline">
    //             <div className="experience-time">
    //               <h2>2004 - 2008</h2>
    //               <h3>
    //                 bachelor <span>of </span> creative design
    //               </h3>
    //             </div>
    //             <div className="timeline-horizontal-border">
    //               <i className="fa fa-circle" aria-hidden="true"></i>
    //               <span
    //                 className="single-timeline-horizontal spacial-horizontal-line
    //                         "
    //               ></span>
    //             </div>
    //             <div className="timeline">
    //               <div className="timeline-content">
    //                 <h4 className="title">university of bolton</h4>
    //                 <h5>bolton, united kingdome</h5>
    //                 <p className="description">
    //                   Duis aute irure dolor in reprehenderit in vol patate velit
    //                   esse cillum dolore eu fugiat nulla pari. Excepteur sint
    //                   occana inna tecat cupidatat non proident.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <Container>
    //   <Row>
    //     <Col sm>
    //       <div className="single-horizontal-timeline">
    //         <div className="experience-time">
    //           <h2>2008 - 2010</h2>
    //           <h3>
    //             master <span>of </span> computer science
    //           </h3>
    //         </div>
    //         <div className="timeline-horizontal-border">
    //           <i className="fa fa-circle" aria-hidden="true"></i>
    //           <span className="single-timeline-horizontal"></span>
    //         </div>
    //         <div className="timeline">
    //           <div className="timeline-content">
    //             <h4 className="title">university of north carolina</h4>
    //             <h5>north carolina, USA</h5>
    //             <p className="description">
    //               Duis aute irure dolor in reprehenderit in vol patate velit
    //               esse cillum dolore eu fugiat nulla pari. Excepteur sint occana
    //               inna tecat cupidatat non proident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col sm>
    //       <div class="single-horizontal-timeline">
    //         <div class="experience-time">
    //           <h2>2004 - 2008</h2>
    //           <h3>
    //             bachelor <span>of </span> computer science
    //           </h3>
    //         </div>
    //         <div class="timeline-horizontal-border">
    //           <i class="fa fa-circle" aria-hidden="true"></i>
    //           <span class="single-timeline-horizontal"></span>
    //         </div>
    //         <div class="timeline">
    //           <div class="timeline-content">
    //             <h4 class="title">university of north carolina</h4>
    //             <h5>north carolina, USA</h5>
    //             <p class="description">
    //               Duis aute irure dolor in reprehenderit in vol patate velit
    //               esse cillum dolore eu fugiat nulla pari. Excepteur sint occana
    //               inna tecat cupidatat non proident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col sms>3 of 3</Col>
    //   </Row>
    // </Container>
  );
}

export default Resume;
