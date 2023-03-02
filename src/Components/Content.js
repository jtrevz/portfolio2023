import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Landing from './Landing/index.js'
import About from './About'
import Work from './Work'
import '../App.css'

export default function Content() {
    const location = useLocation();

  return (
    <div id="Content" className="min-vh-100">
      <AnimatePresence>
      <Routes location={location} key={location.pathname}> 
        <Route path='/' element={<Landing/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='work' element={<Work/>}/>
      </Routes>
    </AnimatePresence>
    </div>
  )
}
