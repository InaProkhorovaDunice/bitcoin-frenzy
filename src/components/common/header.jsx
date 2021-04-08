import React from 'react';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/common.scss';

const Header = () => {
  return (
    <div className={'header-container'}>
      <div className={'header-logo-block'}>
        <div className={'logo'}>
          <FontAwesomeIcon icon={faBitcoin} />
        </div>
        <p>Bitcoin frenzy</p>
      </div>
      <div className={'bitcoin-price-block'}>1 bitcoin = 1,000 $</div>
      <div className={'wallet-info-block'}>
        <p className={'label'}>10,400 $</p>
        <p className={'label'}>7 bitcoins</p>
      </div>
    </div>
  );
};

export default React.memo(Header);
