import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";
function Contact() {
  return (
    <Container fluid className="cont">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3c2a96"
          fill-opacity="1"
          d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <h1 className="tittle-contact" id="contact">Get in touch</h1>
      <Row className="contact-form">
      
        <Col xs={12} md={6} >
          <br></br>
          <ul className="list">
            <li>
              <Button
                variant="primary"
                className="btn-social"
                href="https://www.linkedin.com/in/rosario-scarlata-153b831a1/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Button>{" "}
              Follow me on linkedin
            </li>
            <li>
              <Button
                variant="danger"
                className="btn-social"
                href="mailto:rosarioscarlata24@gmail.com"
                target="_blank"
              >
                <i className="fab fa-google"></i>
              </Button>{" "}
              Lets chat
            </li>
            <li>
              <Button
                variant="dark"
                className="btn-social"
                href="https://github.com/rochyscarlata"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>{" "}
              Find me on GitHub
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
