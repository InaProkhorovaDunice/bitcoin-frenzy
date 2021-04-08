import React from 'react';

import '../../styles/common.scss';

const Header = () => {
  return (
    <div className={'header-container'}>
      <div className={'header-logo-block'}>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0" transform="translate(0 -0.015625) scale(0.000833333)" />
        </pattern>
        <rect x="20" y="13" width="33" height="32" rx="16" fill="url(#pattern0)" />
        <p>Bitcoin frenzy</p>
      </div>
      <div className={'bitcoin-price-block'}>`1 bitcoin = 1,000 $`</div>
      <div className={'wallet-info-block'}>
        <p>10,400 $</p>
        <p>7 bitcoins</p>
      </div>
    </div>
  );
};

export default React.memo(Header);
