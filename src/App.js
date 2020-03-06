import React from 'react';
import Detector from './components/Detector/Detector';
import Title from './components/Title';
import Text2 from './components/Text2';
import './App.css'
import Logo from './Logo.png';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div id="top-space"/>
      <div id="logo">
        <img src={Logo} width="150" height="50" alt="growing healthy plant"  />
      </div>
      <div>
        <Title/>
      </div>
      <div>
        <Button className="start-button">START...</Button>
      </div>
      <div>
        <Text2/>
      </div>
 

    </div>
  );
}

export default App;
