import React, { Component } from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import Notifications from './notifications';
import CoinList from '../views/coin-list';

class Dashboard extends Component {
  render(){
    return (
      <>
        <MDBContainer fluid className="dashboard-container">
          <MDBRow>
            <MDBCol className="mx-auto" sm="12" md="7">
              <CoinList />
            </MDBCol>

            <MDBCol sm="12" md="5">
              <Notifications />
            </MDBCol>

          </MDBRow>
          
        </MDBContainer>

      </>

    )

  }

}

export default Dashboard;
