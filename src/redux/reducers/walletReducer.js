import { handleActions } from 'redux-actions';

import {
  depositWallet,
  withdrawalWallet,
  decreaseWalletAfterBuy,
  increaseWalletAfterSell,
} from '../actions/walletActions';

import { INITIAL_WALLET_AMOUNT, ONE_TRANSACTION_AMOUNT } from '../../configs/initialVariables';

const initialState = {
  walletAmount: INITIAL_WALLET_AMOUNT,
  oneTransactionAmount: ONE_TRANSACTION_AMOUNT,
};

const walletHandler = {
  [depositWallet]: (state) => {
    const updatedWalletAmount = state.walletAmount + state.oneTransactionAmount;
    return { ...state, walletAmount: updatedWalletAmount };
  },
  [withdrawalWallet]: (state) => {
    const updatedWalletAmount = state.walletAmount - state.oneTransactionAmount;
    return { ...state, walletAmount: updatedWalletAmount };
  },
  [increaseWalletAfterSell]: (state, { payload }) => {
    const updatedWalletAmount = state.walletAmount + payload;
    return { ...state, walletAmount: updatedWalletAmount };
  },
  [decreaseWalletAfterBuy]: (state, { payload }) => {
    const updatedWalletAmount = state.walletAmount - payload;
    return { ...state, walletAmount: updatedWalletAmount };
  },
};

const walletReducer = handleActions(walletHandler, initialState);
export default walletReducer;
