import React from "react";
import Rosario from "../../assets/img/yo.png";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
function Home() {
  return (
    <Container className="home-container">
      <Row>
        <Col xs="12" sm={6}>
          <Fade right>
            <div className="text-zone">
              <h1 className="h1">WELCOME! </h1>

              <span className="gkFbTA">I</span>
              <span className="gkFbTA">'</span>
              <span className="letra gkFbTA ">m</span>
              <span className="gkFbTAa"> I</span>

              <span className="gkFbTA">R</span>
              <span className="gkFbTA">o</span>
              <span className="gkFbTA">s</span>
              <span className="gkFbTA">a</span>
              <span className="gkFbTA">r</span>
              <span className="gkFbTA">i</span>
              <span className="gkFbTA">o</span>
              <br></br>
              <span className="gkFbTA">W</span>
              <span className="gkFbTA ">e</span>
              <span className="gkFbTA ">b</span>
              <span className="gkFbTAa"> I</span>

              <span className="gkFbTA">D</span>
              <span className="gkFbTA">e</span>
              <span className="gkFbTA">v</span>
              <span className="gkFbTA">e</span>
              <span className="gkFbTA">l</span>
              <span className="gkFbTA">o</span>
              <span className="gkFbTA">p</span>
              <span className="gkFbTA">e</span>
              <span className="gkFbTA">r</span>
            </div>
            <div className="parrafito">
              <p>Frontend, React</p>
            </div>
            <Button variant="outline-dark" size="lg" className="contact">
              Contact me
            </Button>
            <div className="pre">
              <p>Front End, React</p>
            </div>
            
          </Fade>
        </Col>
        <Col xs="12" sm={6}>
          <img
            alt="logo"
            src={Rosario}
            className="imgrosario"
            width="400"
            height="500"
            responsive
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
