import React from 'react'
import { motion as m } from "framer-motion"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'

export default function Landing() {
  return (
    <div id="Landing">
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div>
              <h1 id="name">
                JENNIFER TREVIZO
              </h1>
              <h4 id="profession">
                FULL STACK DEVELOPER
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
