import React from 'react'
import { motion as m } from "framer-motion"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'

export default function Landing() {
  return (
    <m.div id="Landing" key="Landing" className="" initial={{y:'100%'}} animate={{y:"0%"}} transition={{duration: 0.75}} exit={{opacity:1}}>
      <Container fluid>
        <Row className="d-flex align-items-stretch">
          <Col className="d-flex justify-content-center align-items-center min-vh-100 col-md-12">
            <div className="pb-5">
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
    </m.div>
  )
}
