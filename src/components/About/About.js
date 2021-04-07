import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import imgAbout from "../../img/imagecola.png";

import Fade from "react-reveal/Fade";

function About() {
  return (
    <Container className="aboutsection">
      <Fade bottom cascade>
        <Row>
          <Col xs="12" sm={6}>
            <img
              alt="logo"
              src={imgAbout}
              className="imgabout"
              width="500"
              responsive
            />
          </Col>
          <Col xs="12" sm={6}>
            <div className="heading-section">
              <h1 className="big">About </h1>
              <h2 className="mb-4 h2">About Me</h2>
              <p className="p">
                I am a front end developer located in Argentina. I've been in
                the programming world for 3 years, but in frontend development
                for a year. I like challenges and teamwork.
                <br></br> Also im a fan of online courses❤.
              </p>
              <a
                href="./assets/docs/CV-RosarioScarlata.pdf"
                target="_blank"
                class="buttonn button--about-me"
              >
                Descargar CV
              </a>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
    // {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    //   <path
    //     fill="#8be8ff"
    //     fill-opacity="1"
    //     d="M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,202.7C672,192,768,128,864,133.3C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    //   ></path>
    // </svg> */}
  );
}

export default About;
// {
//   /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
//         <path
//           fill="#8be8ff"
//           fill-opacity="1"
//           d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         ></path>
//       </svg> */
// }
