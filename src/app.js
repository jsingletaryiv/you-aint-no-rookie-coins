import React from 'react';

import {  BrowserRouter as Router, 
          Switch, 
          Route } from 'react-router-dom';

// import { MDBContainer } from 'mdbreact';

import Navbar from './components/layout/navbar'; 
import Dashboard from './components/dashboard/dashboard';
import CoinDetails from './components/views/coin-details';
import SignIn from './components/auth/sign-in';
import SignUp from './components/auth/sign-up';

const App = () => {
  return (
    <Router>
      <main className="app-main">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route path="/coin/:id" component={ CoinDetails } />
          <Route path="/sign-in" component={ SignIn } />
          <Route path="/sign-up" component={ SignUp } />

        </Switch>

      </main>

    </Router>

  )

}

export default App;
