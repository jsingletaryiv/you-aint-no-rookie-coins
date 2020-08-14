import React from 'react';

import {  MDBTypography, 
          MDBContainer, 
          MDBRow, 
          MDBCol } from 'mdbreact';

const AboutPage = () => {
  return (
    <>
      <MDBContainer className="about-container">
        <MDBRow>
          <MDBCol className="mx-auto">
            <MDBTypography blockquote bqColor='primary'>
              <p className="bq-title">
                About Us
              </p>
              <p>
                Pardon Our Dust... This page is currently under development and is not accessible at this time. So that means BEAT IT!!
              </p>

            </MDBTypography>

          </MDBCol>

        </MDBRow>

      </MDBContainer>

    </>

  );

}

export default AboutPage;
