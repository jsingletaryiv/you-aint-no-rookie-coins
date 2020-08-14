import React from 'react';

import {  MDBContainer, 
          MDBCard, 
          MDBCardBody, 
          MDBBtn, 
          MDBIcon, 
          MDBCardTitle, 
          MDBCardText, 
          MDBCardFooter} from 'mdbreact';

const CoinDetails = (props) => {
  const id = props.match.params.id;
  return (
    <>
      <MDBContainer fluid style={{marginTop: "100px"}}>
        <MDBCard className="mt-5 w-50 w-responsive mx-auto z-depth-0" color="default lighten-2" text="default" >
          <MDBCardBody>
            <MDBCardTitle tag="h4">Title of Coin - {id}</MDBCardTitle>
            <MDBCardText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam est magna, eleifend sed neque sit amet, scelerisque pulvinar velit.
                Integer turpis tellus, tempor ac magna sed, iaculis aliquam mi. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam est magna, eleifend sed neque sit amet, scelerisque pulvinar velit.
                Integer turpis tellus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam est magna, eleifend sed neque sit amet, scelerisque pulvinar velit.
              </p>

            </MDBCardText>
            
            <MDBBtn color="indigo" size="sm">
              <MDBIcon fas icon="share-alt-square" className="left" /> Share
            </MDBBtn>

          </MDBCardBody>

          <MDBCardFooter color="primary darken-3" text="default" small muted>
            <div>Posted by thesuperuser</div>
            <time>August 11, 1:34am</time>
          </MDBCardFooter>

        </MDBCard>
        
      </MDBContainer>

    </>

  );

};

export default CoinDetails;
