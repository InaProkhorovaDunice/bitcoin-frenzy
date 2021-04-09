import React from 'react';
import { useSelector } from 'react-redux';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatNumericOutput } from '../../utils';
import '../../styles/common.scss';

const Header = () => {
  const bitcoinAmount = useSelector((state) => state.bitcoin.bitcoinAmount);
  const walletAmount = useSelector((state) => state.wallet.walletAmount);
  const bitcoinPrice = useSelector((state) => state.bitcoin.bitcoinPrice);

  return (
    <div className={'header-container'}>
      <div className={'header-logo-block'}>
        <div className={'logo'}>
          <FontAwesomeIcon icon={faBitcoin} />
        </div>
        <p>Bitcoin frenzy</p>
      </div>
      <div className={'bitcoin-price-block'}>{`1 bitcoin = ${formatNumericOutput(
        bitcoinPrice,
      )} $`}</div>
      <div className={'wallet-info-block'}>
        <p className={'label'}>{`${formatNumericOutput(walletAmount)} $`}</p>
        <p className={'label'}>{`${formatNumericOutput(bitcoinAmount)} bitcoins`}</p>
      </div>
    </div>
  );
};

export default React.memo(Header);
