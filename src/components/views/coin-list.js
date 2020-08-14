import React from 'react';

import { MDBCol } from 'mdbreact';

import CoinSummary from './coin-summary';

const CoinList = () => {
  return (
    <section className="text-center my-5">
      <MDBCol sm="12" md="12" lg="6" className="mb-lg-0 mb-4 mx-auto">
        <div className="mx-auto">
          <CoinSummary />
          <CoinSummary />
          <CoinSummary />
          <CoinSummary />

        </div>

      </MDBCol>

    </section>

  )

}

export default CoinList;
