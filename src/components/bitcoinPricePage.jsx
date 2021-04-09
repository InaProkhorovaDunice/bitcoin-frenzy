import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { formatNumericOutput, getDate } from '../utils';
import { BITCOIN_PRICE_RANGE } from '../configs/initialVariables';
import { increaseBitcoinPrice, decreaseBitcoinPrice } from '../redux/actions/bitcoinActions';
import { addEventToHistory } from '../redux/actions/historyActions';

const BitcoinPricePage = () => {
  const dispatch = useDispatch();
  const bitcoinPrice = useSelector((state) => state.bitcoin.bitcoinPrice);
  const [errorMessage, setErrorMessage] = useState('');
  const bitcoinPriceRange = BITCOIN_PRICE_RANGE;

  const getHistoryPayload = (action) => {
    const date = getDate();
    let message;
    if (action === 'increase') {
      message = `Increased Bitcoin price by ${formatNumericOutput(bitcoinPriceRange)}$`;
    } else {
      message = `Decreased Bitcoin price by ${formatNumericOutput(bitcoinPriceRange)}$`;
    }
    return { date, message };
  };

  const increasePrice = () => {
    dispatch(increaseBitcoinPrice());
    dispatch(addEventToHistory(getHistoryPayload('increase')));
    setErrorMessage('');
  };

  const decreasePrice = () => {
    if (bitcoinPrice <= bitcoinPriceRange) {
      setErrorMessage(`Sorry, you can\'t set a negative price!`);
    } else {
      dispatch(decreaseBitcoinPrice());
      dispatch(addEventToHistory(getHistoryPayload('decrease')));
    }
  };

  return (
    <div className={'wallet-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>{`Bitcoin price is ${formatNumericOutput(bitcoinPrice)}$`}</p>
        <div className={'price-action-block'}>
          <button className={classNames('big-button', 'action-button')} onClick={increasePrice}>
            <p className={'button-label'}>Increase Bitcoin</p>
            <p className={'button-label'}>{`Price (+${formatNumericOutput(bitcoinPriceRange)})`}</p>
          </button>
          <button className={classNames('big-button', 'action-button')} onClick={decreasePrice}>
            <p className={'button-label'}>Decrease Bitcoin</p>
            <p className={'button-label'}>{`Price (-${formatNumericOutput(bitcoinPriceRange)})`}</p>
          </button>
        </div>
        {errorMessage && <p className={'error-message'}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default React.memo(BitcoinPricePage);
