import React from 'react';
import { MDBNavItem, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavLink } from 'mdbreact';

class SignedInLinks extends React.Component {
  render() {
    return (
      <>            
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">Hi User</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <MDBIcon icon="user" />
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default">
              <MDBDropdownItem href="#!">Dashboard</MDBDropdownItem>
              <MDBDropdownItem href="#!">Collections</MDBDropdownItem>
              <MDBDropdownItem href="#!">My Account</MDBDropdownItem>
              <MDBDropdownItem href="#!">Sign Out</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </>
    );
  }
}

export default SignedInLinks;
