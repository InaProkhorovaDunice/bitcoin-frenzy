import { createActions } from 'redux-actions';

import {
  PURCHASE_BITCOIN,
  SELL_BITCOIN,
  INCREASE_BITCOIN_PRICE,
  DECREASE_BITCOIN_PRICE,
} from '../constants';

export const {
  purchaseBitcoin,
  sellBitcoin,
  increaseBitcoinPrice,
  decreaseBitcoinPrice,
} = createActions(PURCHASE_BITCOIN, SELL_BITCOIN, INCREASE_BITCOIN_PRICE, DECREASE_BITCOIN_PRICE);
