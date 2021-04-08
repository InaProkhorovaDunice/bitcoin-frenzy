import React from 'react';

import NavItem from './navItem';
import '../../styles/common.scss';

const LeftSideBar = () => {
  const itemTabs = ['My wallet', 'Buy bitcoin', 'Sell bitcoin', 'Bitcoin price'];

  return (
    <div className={'left-bar-container'}>
      {itemTabs.map((el) => (
        <NavItem label={el} key={el} />
      ))}
    </div>
  );
};

export default React.memo(LeftSideBar);
