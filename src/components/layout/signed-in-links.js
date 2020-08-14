import React from 'react';

import {  MDBNavItem, 
          MDBIcon, 
          MDBDropdown, 
          MDBDropdownToggle, 
          MDBDropdownMenu, 
          MDBDropdownItem } from 'mdbreact';

const SignedInLinks = () => {
  return (
    <>            
      <MDBNavItem>
        <div className="waves-effect waves-light">Hi User</div>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <MDBIcon icon="user" />
          </MDBDropdownToggle>

          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="/">Dashboard</MDBDropdownItem>
            <MDBDropdownItem href="/about">Collections</MDBDropdownItem>
            <MDBDropdownItem href="/about">My Account</MDBDropdownItem>
            <MDBDropdownItem href="/">Sign Out</MDBDropdownItem>

          </MDBDropdownMenu>

        </MDBDropdown>

      </MDBNavItem>

    </>

  );

}

export default SignedInLinks;
