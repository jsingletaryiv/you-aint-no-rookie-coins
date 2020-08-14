import React, { Component } from 'react';
import { MDBNavItem, MDBNavLink } from 'mdbreact';

class SignedOutLinks extends Component {
  render() {
    return (
      <>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">Sign In</MDBNavLink>
        </MDBNavItem>
      </>
    );
  }
}

export default SignedOutLinks;
