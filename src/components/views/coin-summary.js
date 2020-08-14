import React from 'react';

import {  MDBCard, 
          MDBCardBody, 
          MDBBtn, 
          MDBIcon, 
          MDBCardTitle, 
          MDBCardText } from 'mdbreact';

const CoinSummary = () => {
  return (
    <>
      <MDBCard className="mt-5" color="grey lighten-2" text="default" >
        <MDBCardBody>
          <MDBCardTitle>Title of Card</MDBCardTitle>
          <MDBCardText className="grey-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam est magna, eleifend sed neque sit amet, scelerisque pulvinar velit.
            Integer turpis tellus, tempor ac magna sed, iaculis aliquam mi.
          </MDBCardText>
          
          <MDBBtn color="orange" size="sm">
            <MDBIcon fas icon="info-circle" className="left" /> Details
          </MDBBtn>

        </MDBCardBody>

      </MDBCard>

    </>

  );

}

export default CoinSummary;
