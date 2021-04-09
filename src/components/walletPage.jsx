import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ONE_TRANSACTION_AMOUNT } from '../configs/initialVariables';
import { formatNumericOutput, getDate } from '../utils';
import { depositWallet, withdrawalWallet } from '../redux/actions/walletActions';
import { addEventToHistory } from '../redux/actions/historyActions';

const WalletPage = () => {
  const dispatch = useDispatch();
  const bitcoinAmount = useSelector((state) => state.bitcoin.bitcoinAmount);
  const walletAmount = useSelector((state) => state.wallet.walletAmount);
  const [errorMessage, setErrorMessage] = useState('');
  const oneTransactionAmount = ONE_TRANSACTION_AMOUNT;

  const getHistoryPayload = (action) => {
    const date = getDate();
    let message;
    if (action === 'deposit') {
      message = `${oneTransactionAmount}$ Deposit`;
    } else {
      message = `${oneTransactionAmount}$ Withdraw`;
    }
    return { date, message };
  };

  const deposit = () => {
    dispatch(depositWallet());
    dispatch(addEventToHistory(getHistoryPayload('deposit')));
    setErrorMessage('');
  };

  const withdraw = () => {
    if (walletAmount < oneTransactionAmount) {
      setErrorMessage(`Sorry, you don't have enough funds for withdrawal`);
    } else {
      dispatch(withdrawalWallet());
      dispatch(addEventToHistory(getHistoryPayload('withdraw')));
    }
  };

  return (
    <div className={'wallet-container'}>
      <div className={'info-block'}>
        <p className={'info-message'}>Your bitcoin wallet</p>
        <p className={'info-message'}>{`You now own ${formatNumericOutput(
          bitcoinAmount,
        )} bitcoins`}</p>
        {errorMessage && <p className={'error-message'}>{errorMessage}</p>}
        <div className={'action-block'}>
          <button className={'action-button'} onClick={deposit}>{`Deposit ${formatNumericOutput(
            oneTransactionAmount,
          )}$`}</button>
          <button className={'action-button'} onClick={withdraw}>{`Withdraw ${formatNumericOutput(
            oneTransactionAmount,
          )}$`}</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WalletPage);
