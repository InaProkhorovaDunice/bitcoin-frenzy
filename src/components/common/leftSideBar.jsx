import React from 'react';

import NavItem from './navItem';
import '../../styles/leftBar.scss';

const LeftSideBar = () => {
  const itemTabs = [
    { label: 'My wallet', link: '/wallet' },
    { label: 'Buy bitcoin', link: '/buy' },
    { label: 'Sell bitcoin', link: '/sell' },
    { label: 'Bitcoin price', link: '/bitcoin' },
  ];

  return (
    <div className={'left-bar-container'}>
      {itemTabs.map((el) => (
        <NavItem item={el} key={el.label} />
      ))}
    </div>
  );
};

export default React.memo(LeftSideBar);
