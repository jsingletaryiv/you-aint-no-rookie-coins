import React, { Component } from 'react';

import {  MDBContainer, 
          MDBRow, 
          MDBCol, 
          MDBBtn, 
          MDBCard, 
          MDBCardBody } from 'mdbreact';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <>
        <MDBContainer className="sign-in-container">
          <MDBRow>
            <MDBCol className="mx-auto" md="6">
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={this.handleSubmit} color="white">
                    <p className="h4 text-center mb-4">Sign In</p>
                    <label htmlFor="email" className="grey-text">Your Email</label>
                    <input type="email" id="email" className="form-control" onChange={this.handleChange}/>

                    <br />

                    <label htmlFor="password" className="grey-text">Your password</label>
                    <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
                    <div className="text-center mt-4">
                      <MDBBtn color="indigo" className="z-depth-0" type="submit">Enter</MDBBtn>
                    </div>

                  </form>

                </MDBCardBody>

              </MDBCard>

            </MDBCol>

          </MDBRow>

        </MDBContainer>

      </>

    );

  }

}

export default SignIn;
