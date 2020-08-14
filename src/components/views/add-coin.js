import React, { Component } from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody } from 'mdbreact';

class AddCoin extends Component {
  state = {
    title: '',
    content: ''
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
                  {/*// TODO: Add in additional property fields for coin being added */}
                  <form onSubmit={this.handleSubmit} color="white">
                    <p className="h4 text-center mb-4">Add to Your Collection</p>

                    <label htmlFor="title" className="grey-text">Title</label>
                    <input type="text" id="title" className="form-control" onChange={this.handleChange} />

                    <br />

                    <label htmlFor="content" className="grey-text">Coin Details</label>
                    <textarea type="text" id="content" className="form-control" rows="3" onChange={this.handleChange}></textarea>
                    
                    <div className="text-center mt-4">
                      <MDBBtn color="indigo" className="z-depth-0" type="submit">Create</MDBBtn>
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

export default AddCoin;
