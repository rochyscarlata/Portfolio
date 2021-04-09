import React from "react";
import { Container, Form } from "react-bootstrap";
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

      <Form className="contact-form">
        <h1 className="tittle-contact">Contact me !</h1>
        <br></br>
        <Form.Group controlId="exampleForm.ControlInput1" className="mx-sm-3">
          <Form.Control type="email" placeholder="Name" size="lg" />
        </Form.Group>
        <br></br>
        <Form.Group controlId="exampleForm.ControlInput1" className="mx-sm-3">
          <Form.Control type="email" placeholder="Email" size="lg" />
        </Form.Group>
        <br></br>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="mx-sm-3 formu"
        >
          <Form.Control
            as="textarea"
            placeholder="Message"
            rows={3}
            size="lg"
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contact;
