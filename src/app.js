import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MDBContainer } from 'mdbreact';

import Navbar from './components/layout/navbar'; 

const App = () => {
  return (
    <Router>
      <main className="app-main">
        <Navbar></Navbar> 
        <MDBContainer className="text-center mt-5 pt-5">
          <h2>This Navbar is fixed</h2>
          <h5>It will always stay visible on the top, even when you scroll down</h5>
          <br />
          <p>Full page intro with background image will be always displayed in full screen mode, regardless of device</p>
        </MDBContainer>
      </main>
    </Router>
  )
}

export default App;
