import { createActions } from 'redux-actions';

import { DEPOSIT_WALLET, WITHDRAWAL_WALLET } from '../constants';

export const { depositWallet, withdrawalWallet } = createActions(DEPOSIT_WALLET, WITHDRAWAL_WALLET);
