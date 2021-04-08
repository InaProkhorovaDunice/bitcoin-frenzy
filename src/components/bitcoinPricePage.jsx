import React from 'react';
import classNames from 'classnames';

const BitcoinPricePage = () => {
  return (
    <div className={'wallet-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>Bitcoin price is 1.000$</p>
        <div className={'price-action-block'}>
          <button className={classNames('big-button', 'action-button')}>
            <p className={'button-label'}>Increase Bitcoin</p>
            <p className={'button-label'}>Price (+1,000)</p>
          </button>
          <button className={classNames('big-button', 'action-button')}>
            <p className={'button-label'}>Decrease Bitcoin</p>
            <p className={'button-label'}>Price (-1,000)</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BitcoinPricePage);
