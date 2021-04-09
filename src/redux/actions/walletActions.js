import { createActions } from 'redux-actions';

import {
  DEPOSIT_WALLET,
  WITHDRAWAL_WALLET,
  DECREASE_WALLET_AFTER_BUY,
  INCREASE_WALLET_AFTER_SELL,
} from '../constants';

export const {
  depositWallet,
  withdrawalWallet,
  decreaseWalletAfterBuy,
  increaseWalletAfterSell,
} = createActions(
  DEPOSIT_WALLET,
  WITHDRAWAL_WALLET,
  DECREASE_WALLET_AFTER_BUY,
  INCREASE_WALLET_AFTER_SELL,
);
