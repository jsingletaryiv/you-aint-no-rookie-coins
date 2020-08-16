import React from 'react';

import { MDBCol } from 'mdbreact';

import CoinSummary from './coin-summary';

const CoinList = ({coins}) => {
  return (
    <section className="text-center my-5">
      <MDBCol sm="12" md="12" lg="6" className="mb-lg-0 mb-4 mx-auto">
        <div className="mx-auto">
          { coins && coins.map(coin => {
            return <CoinSummary coin={coin} key={coin.id} />
          }) }

        </div>

      </MDBCol>

    </section>

  )

}

export default CoinList;
