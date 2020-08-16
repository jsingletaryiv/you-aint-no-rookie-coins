import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import Notifications from './notifications';
import CoinList from '../views/coin-list';


class Dashboard extends Component {
  render(){
    // console.log(this.props);
    const { coins } = this.props;
    return (
      <>
        <MDBContainer fluid className="dashboard-container">
          <MDBRow>
            <MDBCol className="mx-auto" sm="12" md="7">
              <CoinList coins={coins} />
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

const mapStateToProps = (state) => {
  return {
    coins: state.coin.coins
  }
}

export default connect(mapStateToProps)(Dashboard);
