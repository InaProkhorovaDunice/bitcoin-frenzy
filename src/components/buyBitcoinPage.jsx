import React from 'react';

const BuyBitcoinPage = () => {
  return (
    <div className={'wallet-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>Bitcoin price is 1.000$</p>
        <p className={'info-message'}>Prices are low. buy more!</p>
        <button className={'action-button'}>Buy 1 Bitcoin</button>
      </div>
    </div>
  );
};

export default React.memo(BuyBitcoinPage);
