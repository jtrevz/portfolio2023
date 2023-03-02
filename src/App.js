import React from 'react';
import NavBar from './Components/NavBar'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing'

function App() {
  return (
   <div id="App">
    <BrowserRouter>
    <NavBar/>
    <Routes> 
      <Route path='/' element={<Landing/>}/>
      <Route path ='/about' element={<About/>}/>
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
