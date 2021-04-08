import React from 'react';

import HistoryItem from './historyItem';
import '../../styles/common.scss';

const RightSideBar = () => {
  const historyItems = [
    { date: '12233', action: 'dgfgfdg' },
    { date: '222', action: 'aaaaa' },
  ];

  return (
    <div className={'right-bar-container'}>
      {historyItems?.length &&
        historyItems.map((el, index) => <HistoryItem info={el} key={index} />)}
    </div>
  );
};

export default React.memo(RightSideBar);
