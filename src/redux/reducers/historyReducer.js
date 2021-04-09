import { handleActions } from 'redux-actions';

import { addEventToHistory } from '../actions/historyActions';

const initialState = {
  history: [],
};

const historyHandler = {
  [addEventToHistory]: (state, { payload }) => {
    return { ...state, history: [payload, ...state.history] };
  },
};

const historyReducer = handleActions(historyHandler, initialState);
export default historyReducer;
