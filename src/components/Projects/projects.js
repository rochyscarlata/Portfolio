import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Jumbotron,
  Button,
  Figure,
} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Stats from "../../assets/img/statistics.png";
import Super from "../../assets/img/super.png";
import Chat from "../../assets/img/chating.png";
import Movie from "../../assets/img/popcorn.png";
import Todo from "../../assets/img/listdo.png";
import Cotiz from "../../assets/img/cotiz.png";

import "./projects.css";
function projects() {
  return (
    <Container fluid className="projects" id="projects">
      <Fade bottom cascade>
        <section className="heading-section">
          <h2 className="mb-4 h2">My projects</h2>

          <p className="p">
            These are some of my projects. The others are in my github profile.
          </p>
        </section>
        <br />
        <Row>
          <Col sm>
            <Jumbotron>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={Super}
                />
              </Figure>
              <h1>Super Heroes App</h1>
              <p>
                This is a challenge for the alkemy company, you can enter with
                the user 'challenge@alkemy.org' and the password 'react'
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Jumbotron>
              <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Movie}
                />
              </Figure>
              <h1>Movie Time</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Jumbotron>
              <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Stats}
                />
              </Figure>
              <h1>Budget app</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Jumbotron>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={Chat}
                />
              </Figure>
              <h1>Chat App</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Jumbotron>
              <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Cotiz}
                />
              </Figure>
              <h1>Calculator cryptocurrency</h1>
              <p>
                This is a simple app to find the prices of cryptocurrencies.
              </p>
              <p>
                <Button
                  variant="primary"
                  target="_blank"
                  href="https://cryptopochola.netlify.app/"
                >
                  Live Preview
                </Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Jumbotron>
              <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Todo}
                />
              </Figure>
              <h1>To do app</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        {/* */}
      </Fade>
    </Container>
  );
}

export default projects;
