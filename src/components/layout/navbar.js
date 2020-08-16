import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import {  MDBNavbar, 
          MDBNavbarBrand, 
          MDBNavbarNav, 
          MDBNavbarToggler, 
          MDBCollapse, 
          MDBNavItem, 
          MDBNavLink } from 'mdbreact';

import SignedInLinks from './signed-in-links';
import SignedOutLinks from './signed-out-links';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <header>
        <MDBNavbar dark color="indigo" expand="md" scrolling fixed="top">
          <MDBNavbarBrand href="/">
              <strong>YouAintNoRookie - Coins</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.onClick} />
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about">Coins 101</MDBNavLink>
              </MDBNavItem>
              {/* // TODO: Add in search tool component */}
              <MDBNavItem>
                <MDBNavLink to="/">Search</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <SignedOutLinks />
              <SignedInLinks />
            </MDBNavbarNav>

          </MDBCollapse>

        </MDBNavbar>

      </header>

    );

  }

}

export default Navbar;