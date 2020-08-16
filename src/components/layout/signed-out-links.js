import React from 'react';

import { MDBNavItem, MDBNavLink } from 'mdbreact';

const SignedOutLinks = () => {
  return (
    <>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/sign-in">Sign In</MDBNavLink>
      </MDBNavItem>

      <div className='mt-2'>
        <span>/</span>
      </div>
      
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/sign-up">Sign Up</MDBNavLink>
      </MDBNavItem>
    </>
  );
}

export default SignedOutLinks;
