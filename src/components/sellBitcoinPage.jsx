import React from 'react';

const SellBitcoinPage = () => {
  return (
    <div className={'wallet-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>Bitcoin price is 1.000$</p>
        <p className={'info-message'}>Prices are low, are you sure you want to sell?</p>
        <button className={'action-button'}>Sell 1 Bitcoin</button>
      </div>
    </div>
  );
};

export default React.memo(SellBitcoinPage);
