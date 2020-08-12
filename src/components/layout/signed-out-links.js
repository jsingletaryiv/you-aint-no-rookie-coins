import React from 'react';
import { MDBNavItem, MDBNavLink } from 'mdbreact';

class SignedOutLinks extends React.Component {
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
