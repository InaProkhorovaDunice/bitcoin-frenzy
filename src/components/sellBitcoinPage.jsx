import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BITCOIN_TRANSACTION_AMOUNT,
  BITCOIN_PRICE_DEMARCATION_LEVEL,
} from '../configs/initialVariables';
import { formatNumericOutput } from '../utils/numericFormat';
import { getDate } from '../utils/dateFormat';
import { sellBitcoin } from '../redux/actions/bitcoinActions';
import { increaseWalletAfterSell } from '../redux/actions/walletActions';
import { addEventToHistory } from '../redux/actions/historyActions';

const lowPriceMessage = 'Prices are low, are you sure you want to sell?';
const highPriceMessage = 'Price are high, sell now!';

const SellBitcoinPage = () => {
  const dispatch = useDispatch();
  const bitcoinPrice = useSelector((state) => state.bitcoin.bitcoinPrice);
  const bitcoinAmount = useSelector((state) => state.bitcoin.bitcoinAmount);
  const [errorMessage, setErrorMessage] = useState('');

  const getHistoryPayload = () => {
    const date = getDate();
    return { date, message: `Sold ${BITCOIN_TRANSACTION_AMOUNT} Bitcoin` };
  };

  const sell = () => {
    if (bitcoinAmount < BITCOIN_TRANSACTION_AMOUNT) {
      setErrorMessage(`Sorry, you have no bitcoins to sell!`);
    } else {
      // this task did not require working with effects, however, such sequences are best placed in a separate saga to control the flow of execution
      dispatch(sellBitcoin());
      dispatch(increaseWalletAfterSell(bitcoinPrice));
      dispatch(addEventToHistory(getHistoryPayload()));
      setErrorMessage('');
    }
  };

  return (
    <div className={'content-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>Bitcoin price is {formatNumericOutput(bitcoinPrice)}$</p>
        <p className={'info-message'}>
          {bitcoinPrice >= BITCOIN_PRICE_DEMARCATION_LEVEL ? highPriceMessage : lowPriceMessage}
        </p>
        <button className={'action-button'} onClick={sell}>
          Sell {BITCOIN_TRANSACTION_AMOUNT} Bitcoin
        </button>
        {errorMessage && <p className={'error-message'}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default React.memo(SellBitcoinPage);
