import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatNumericOutput } from '../utils/numericFormat';
import { getDate } from '../utils/dateFormat';
import {
  BITCOIN_PRICE_DEMARCATION_LEVEL,
  BITCOIN_TRANSACTION_AMOUNT,
} from '../configs/initialVariables';
import { purchaseBitcoin } from '../redux/actions/bitcoinActions';
import { decreaseWalletAfterBuy } from '../redux/actions/walletActions';
import { addEventToHistory } from '../redux/actions/historyActions';

const lowPriceMessage = 'Prices are low, buy more!';
const highPriceMessage = 'Price are high, are you sure that you want to buy?';

const BuyBitcoinPage = () => {
  const dispatch = useDispatch();
  const bitcoinPrice = useSelector((state) => state.bitcoin.bitcoinPrice);
  const walletAmount = useSelector((state) => state.wallet.walletAmount);
  const [errorMessage, setErrorMessage] = useState('');

  const getHistoryPayload = () => {
    const date = getDate();
    return { date, message: `Purchased ${BITCOIN_TRANSACTION_AMOUNT} Bitcoin` };
  };

  const buyBitcoin = () => {
    if (walletAmount < bitcoinPrice) {
      setErrorMessage(`Sorry, you don't have enough funds to buy!`);
    } else {
      // this task did not require working with effects, however, such sequences are best placed in a separate saga to control the flow of execution
      dispatch(purchaseBitcoin());
      dispatch(decreaseWalletAfterBuy(bitcoinPrice));
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
        <button className={'action-button'} onClick={buyBitcoin}>
          Buy {BITCOIN_TRANSACTION_AMOUNT} Bitcoin
        </button>
        {errorMessage && <p className={'error-message'}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default React.memo(BuyBitcoinPage);
