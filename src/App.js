import React from 'react';
import NavBar from './Components/NavBar'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing'
import About from './Components/About';
import Work from './Components/About';

function App() {
  return (
   <div id="App">
    <BrowserRouter>
    <NavBar/>
    <Routes> 
      <Route path='/' element={<Landing/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='work' element={<Work/>}/>
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
