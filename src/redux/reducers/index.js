import { combineReducers } from 'redux';
import wallet from './walletReducer';
import bitcoin from './bitcoinReducer';
import history from './historyReducer';

export default combineReducers({
  wallet,
  bitcoin,
  history,
});
