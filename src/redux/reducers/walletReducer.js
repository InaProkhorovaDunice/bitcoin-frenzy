import { handleActions } from 'redux-actions';

import { depositWallet, withdrawalWallet } from '../actions/walletActions';

import { INITIAL_WALLET_AMOUNT, ONE_TRANSACTION_AMOUNT } from '../../configs/initialVariables';

const initialState = {
  walletAmount: INITIAL_WALLET_AMOUNT,
  walletTransactionError: '',
};

const authHandler = {
  [depositWallet]: (state) => {
    const updatedWalletAmount = state.walletAmount + ONE_TRANSACTION_AMOUNT;
    return { ...state, amountOfDollars: updatedWalletAmount, walletTransactionError: '' };
  },
  [withdrawalWallet]: (state) => {
    if (state.walletAmount >= ONE_TRANSACTION_AMOUNT) {
      const updatedWalletAmount = state.walletAmount - ONE_TRANSACTION_AMOUNT;
      return { ...state, amountOfDollars: updatedWalletAmount, walletTransactionError: '' };
    } else {
      return { ...state, walletTransactionError: 'Sorry, insufficient funds for withdrawal' };
    }
  },
};

const walletReducer = handleActions(authHandler, initialState);
export default walletReducer;
