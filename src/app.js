import React, { Component } from 'react';

import {  BrowserRouter as Router, 
          Switch, 
          Route } from 'react-router-dom';

import { MDBContainer } from 'mdbreact';

import Navbar from './components/layout/navbar'; 
import Dashboard from './components/dashboard/dashboard';
import CoinDetails from './components/views/coin-details';
import SignIn from './components/auth/sign-in';
import SignUp from './components/auth/sign-up';
import AddCoin from './components/views/add-coin';
import AboutPage from './components/views/about';

class App extends Component {
  render() {
    return (
      <main className="app-main">
        <Router>
          <Navbar />
          <MDBContainer fluid className="app-container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={AboutPage} />
              <Route path="/coin/:id" component={CoinDetails} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/add-coin" component={AddCoin} />
  
            </Switch>
  
          </MDBContainer>
  
        </Router>
      
      </main>
  
    )

  }

}

export default App;
