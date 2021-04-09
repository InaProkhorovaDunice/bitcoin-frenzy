import React from 'react';
import { useSelector } from 'react-redux';

import HistoryItem from './historyItem';
import '../../styles/rightBar.scss';

const RightSideBar = () => {
  const historyItems = useSelector((state) => state.history.history);

  return (
    <div className={'right-bar-container'}>
      {historyItems?.length > 0 &&
        historyItems.map((el, index) => <HistoryItem info={el} key={index} />)}
    </div>
  );
};

export default React.memo(RightSideBar);
