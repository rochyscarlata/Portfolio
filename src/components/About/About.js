import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import imgAbout from "../../assets/img/imagecola.png";
import CV from "../../assets/docs/en-CV-ROSARIOSCARLATA.pdf";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Container fluid className="aboutsection" id="about">
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
                I am a frontend developer located in Argentina. I've been in the
                programming world for 3 years, but in frontend development for a
                year. I like challenges and teamwork.
                <br></br> Also im a fan of online courses❤.
              </p>
              <a
                href={CV}
                target="_blank"
                class="buttonn button--about-me"
                download="en-CV-ROSARIOSCARLATA"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
    
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
