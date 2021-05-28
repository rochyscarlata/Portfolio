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
import Html from '../../assets/img/html.png'
import Css from '../../assets/img/css.png'
import Js from '../../assets/img/js.png'
import Reactjs from '../../assets/img/react.png'
import Node from '../../assets/img/node.png'
import Boots from '../../assets/img/bootstrap-logo.png'
import Material from '../../assets/img/material-ui.png'
import Github from '../../assets/img/github.png'

import "./skills.css";

function Skills() {
  return (
    <Container fluid className="skills" id="Skills">
      <Fade bottom cascade>
        <section className="heading-section">
          <h2 className="mb-4 h2">My Skills</h2>

          <p className="p">
            These are some of my skills. 
          </p>
        </section>
          <br/>
        <Row>
          <Col sm>
            <Figure>
                <Figure.Image
                  width={151}
                  height={150}
                  alt="171x180"
                  src={Html}
                />
              </Figure>
            
          </Col>
          <Col sm>
            <Figure>
                <Figure.Image
                  width={175}
                  height={180}
                  alt="171x180"
                  src={Css}
                />
              </Figure>
          </Col>
          <Col sm>
          <Figure>
                <Figure.Image
                  width={150}
                  height={140}
                  alt="171x180"
                  src={Js}
                />
              </Figure>
          </Col>
        </Row>
        <Row>
          <Col sm>
          <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Reactjs}
                />
              </Figure>
          </Col>
          <Col sm>
          <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Node}
                />
              </Figure>
          </Col>
          <Col sm>
          <Figure>
                <Figure.Image
                  width={150}
                  height={150}
                  alt="171x180"
                  src={Boots}
                />
              </Figure>
           
          </Col>
        </Row>
        <Row>
            <Col>
            <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Material}
                />
              </Figure>
            </Col>
            <Col>
            <Figure>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={Github}
                />
              </Figure>
            </Col>
        </Row>
        {/* */}
      </Fade>
    </Container>
  );
}

export default Skills;
