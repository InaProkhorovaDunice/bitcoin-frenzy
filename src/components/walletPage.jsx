import React from 'react';

const WalletPage = () => {
  return (
    <div className={'wallet-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>Your bitcoin wallet</p>
        <p className={'info-message'}>You now own 7 bitcoins</p>
        <div className={'action-block'}>
          <button className={'action-button'}>Deposit 100$</button>
          <button className={'action-button'}>Withdraw 100$</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WalletPage);
