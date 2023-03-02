import React from 'react';
import NavBar from './Components/NavBar'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './Components/Content'

function App() {
  // const location = useLocation();

  return (
   <div id="App" className="">
    <BrowserRouter>
    <NavBar/>
    <Content/>
   </BrowserRouter>
   </div>
  );
}

export default App;
