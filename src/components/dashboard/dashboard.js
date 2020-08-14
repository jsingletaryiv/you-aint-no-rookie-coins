import React, { Component } from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import Notifications from './notifications';
import CoinList from '../views/coin-list';

class Dashboard extends Component {
  render(){
    return (
      <div style={{ paddingTop: "60px" }}>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol className="mx-auto" sm="12" md="6">
              <CoinList />
            </MDBCol>

            <MDBCol sm="12" md="6">
              <Notifications />
            </MDBCol>

          </MDBRow>
          
        </MDBContainer>

      </div>

    )

  }

}

export default Dashboard;
