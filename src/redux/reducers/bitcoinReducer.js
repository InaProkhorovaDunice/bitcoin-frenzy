import { handleActions } from 'redux-actions';

import {
  BITCOIN_TRANSACTION_AMOUNT,
  BITCOIN_PRICE_RANGE,
  INITIAL_BITCOIN_PRICE,
} from '../../configs/initialVariables';

import {
  purchaseBitcoin,
  sellBitcoin,
  increaseBitcoinPrice,
  decreaseBitcoinPrice,
} from '../actions/bitcoinActions';

const initialState = {
  bitcoinAmount: 0,
  bitcoinPrice: INITIAL_BITCOIN_PRICE,
};

const bitcoinHandler = {
  [purchaseBitcoin]: (state) => {
    const updatedBitcoinAmount = state.bitcoinAmount + BITCOIN_TRANSACTION_AMOUNT;
    return { ...state, bitcoinAmount: updatedBitcoinAmount };
  },
  [sellBitcoin]: (state) => {
    const updatedBitcoinAmount = state.bitcoinAmount - BITCOIN_TRANSACTION_AMOUNT;
    return { ...state, bitcoinAmount: updatedBitcoinAmount };
  },
  [increaseBitcoinPrice]: (state) => {
    const updatedBitcoinPrice = state.bitcoinPrice + BITCOIN_PRICE_RANGE;
    return { ...state, bitcoinPrice: updatedBitcoinPrice };
  },
  [decreaseBitcoinPrice]: (state) => {
    const updatedBitcoinPrice = state.bitcoinPrice - BITCOIN_PRICE_RANGE;
    return { ...state, bitcoinPrice: updatedBitcoinPrice };
  },
};

const bitcoinReducer = handleActions(bitcoinHandler, initialState);
export default bitcoinReducer;
