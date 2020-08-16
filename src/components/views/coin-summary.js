import React from 'react';

import {  MDBCard, 
          MDBCardBody, 
          MDBBtn, 
          MDBIcon, 
          MDBCardTitle, 
          MDBCardText } from 'mdbreact';

const CoinSummary = ({coin}) => {
  return (
    <>
      <MDBCard className="mt-5" color="grey lighten-2" text="default" >
        <MDBCardBody>
          <MDBCardTitle>{coin.title}</MDBCardTitle>
            <MDBCardText className="grey-text">{coin.content}</MDBCardText>
          
          <MDBBtn color="orange" size="sm">
            <MDBIcon fas icon="info-circle" className="left" /> Details
          </MDBBtn>

        </MDBCardBody>

      </MDBCard>

    </>

  );

}

export default CoinSummary;
