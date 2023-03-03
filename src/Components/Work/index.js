import React from 'react'
import { Container } from 'react-bootstrap'
import { motion as m } from "framer-motion"

export default function Work() {
  return (
    <m.div key="Work" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity:0}}>
      <Container fluid>
        <h1>WORK</h1>
      </Container>
    </m.div>
  )
}
