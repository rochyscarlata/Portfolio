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
import Ecom from "../../assets/img/ecommerce.png";
import Movie from "../../assets/img/popcorn.png";
import Todo from "../../assets/img/listdo.png";
import Cotiz from "../../assets/img/cotiz.png";
import Circclo from "../../assets/img/circclovyn.png";

import "./projects.css";
function projects() {
  return (
    <Container fluid className="projects" id="projects">
      <Fade bottom cascade>
        <section className="heading-section">
          <h2 className="mb-4 h2" id="projects">
            My projects
          </h2>

          <p className="p">
            These are some of my projects. The others are in my github profile.
          </p>
        </section>
        <br />
        <Row>
          <Col sm>
            <Jumbotron className="jumbotron">
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
                This is a hero search app, where you can see their
                characteristics and stats, you can enter with any account and
                password.
              </p>
              <p>
                <Button
                  variant="primary"
                  target="_blank"
                  href="https://superheroesview.netlify.app/"
                >
                  Live Preview
                </Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Jumbotron className="jumbotron">
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
                This is a movie search application where you can add to a watch
                list{" "}
              </p>
              <p>
                <Button
                  variant="primary"
                  target="_blank"
                  href="https://moviespediax.netlify.app/"
                >
                  Live Preview
                </Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Jumbotron className="jumbotron">
              <Figure>
                <Figure.Image
                  width={165}
                  height={162}
                  alt="Budget"
                  src={Stats}
                />
              </Figure>
              <h1>Budget app</h1>
              <p>
                This is a Personal Finance Tools app to see how much you are
                spending
              </p>
              <p>
                <Button
                  variant="primary"
                  target="_blank"
                  href="https://budgetappx.netlify.app/"
                >
                  Live Preview
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Jumbotron className="jumbotron">
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={Ecom}
                />
              </Figure>
              <h1>Ecommerce</h1>
              <p>This is a project (e-commerce) for the Coderhouse course.</p>
              <p>
                <Button
                  variant="primary"
                  target="_blank"
                  href="https://buynow-scarlata.netlify.app/"
                >
                  Live Preview
                </Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Jumbotron className="jumbotron">
              <Figure>
                <Figure.Image
                  width={171}
                  height={160}
                  alt="171x180"
                  src={Cotiz}
                />
              </Figure>
              <h2>Calculator cryptocurrency</h2>
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
            <Jumbotron className="jumbotron">
              <Figure className="mt-5">
                <Figure.Image
                  width={180}
                  height={175}
                  alt="171x180"
                  src={Circclo}
                />
              </Figure>
              <br />

              <h1>Circclo</h1>
              <p>Website for the company Circclo</p>
              <p>
                <Button
                  variant="primary"
                  target="_blank"
                  href="https://circclo-pruebas.netlify.app/"
                >
                  Live preview
                </Button>
              </p>
              <br />
            </Jumbotron>
          </Col>
        </Row>
        {/* */}
      </Fade>
    </Container>
  );
}

export default projects;
