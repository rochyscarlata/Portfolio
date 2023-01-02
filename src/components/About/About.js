import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import imgAbout from "../../assets/img/imagecola.png";
import CV from "../../assets/docs/CV-RosarioScarlata.pdf";
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
                programming world for 4 years. I work at JP Morgan & Chase. I
                like challenges and teamwork.
                <br></br>
              </p>
              <a
                href={CV}
                target="_blank"
                class="buttonn button--about-me"
                download="cv-RosarioScarlata"
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
