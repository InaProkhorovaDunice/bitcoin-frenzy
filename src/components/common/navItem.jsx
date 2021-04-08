import React from 'react';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import '../../styles/common.scss';

const NavItem = ({ label }) => {
  return (
    <div className={'nav-item-container'}>
      <div className={'logo'}>
        <FontAwesomeIcon icon={faChartBar} />
      </div>
      <p className={'item-label'}>{label}</p>
    </div>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default React.memo(NavItem);
