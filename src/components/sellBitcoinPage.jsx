import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BITCOIN_TRANSACTION_AMOUNT,
  BITCOIN_PRICE_DEMARCATION_LEVEL,
} from '../configs/initialVariables';
import { formatNumericOutput } from '../utils';
import { sellBitcoin } from '../redux/actions/bitcoinActions';
import { increaseWalletAfterSell } from '../redux/actions/walletActions';

const SellBitcoinPage = () => {
  const dispatch = useDispatch();
  const bitcoinPrice = useSelector((state) => state.bitcoin.bitcoinPrice);
  const bitcoinAmount = useSelector((state) => state.bitcoin.bitcoinAmount);
  const [errorMessage, setErrorMessage] = useState('');
  const bitcoinTransactionAmount = BITCOIN_TRANSACTION_AMOUNT;
  const lowPriceMessage = 'Prices are low, are you sure you want to sell?';
  const highPriceMessage = 'Price are high, sell now!';

  const sell = () => {
    if (bitcoinAmount < bitcoinTransactionAmount) {
      setErrorMessage(`Sorry, you have no bitcoins to sell!`);
    } else {
      dispatch(sellBitcoin());
      dispatch(increaseWalletAfterSell(bitcoinPrice));
      setErrorMessage('');
    }
  };

  return (
    <div className={'wallet-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>{`Bitcoin price is ${formatNumericOutput(bitcoinPrice)}$`}</p>
        <p className={'info-message'}>{`${
          bitcoinPrice >= BITCOIN_PRICE_DEMARCATION_LEVEL ? highPriceMessage : lowPriceMessage
        }`}</p>
        {errorMessage && <p className={'error-message'}>{errorMessage}</p>}
        <button
          className={'action-button'}
          onClick={sell}
        >{`Sell ${bitcoinTransactionAmount} Bitcoin`}</button>
      </div>
    </div>
  );
};

export default React.memo(SellBitcoinPage);
