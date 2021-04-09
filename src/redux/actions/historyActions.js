import { createActions } from 'redux-actions';

import { ADD_EVENT_TO_HISTORY } from '../constants';

export const { addEventToHistory } = createActions(ADD_EVENT_TO_HISTORY);
