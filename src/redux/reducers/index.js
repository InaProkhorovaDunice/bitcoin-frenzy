import { combineReducers } from 'redux';
import wallet from './walletReducer';
import bitcoin from './bitcoinReducer';

export default combineReducers({
  wallet,
  bitcoin,
});
