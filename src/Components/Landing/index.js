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
        <Row id="nameRow" className="d-flex align-items-stretch pl-4 pl-lg-5">
          <Col id="nameCol" className="d-flex justify-content-start align-items-center pl-lg-5 pl-4 min-vh-100 col-9">
            <div>
              <Row className="noWrap">
                <Col className="col-1 line my-2 mx-1 px-0"></Col>
                <Col className="px-1">
                  <p id="name">
                    JENNIFER TREVIZO
                  </p>
                  <p id="profession">
                    SOFTWARE DEVELOPER
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </m.div>
  )
}
