import React from 'react';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/common.scss';

const NavItem = ({ item }) => {
  const { label, link } = item;
  const navigate = useHistory();
  const location = useLocation();

  const redirect = () => {
    navigate.push(link);
  };

  return (
    <div className={'nav-item-container'} onClick={redirect}>
      <div className={'logo'}>
        <FontAwesomeIcon icon={faChartBar} />
      </div>
      <p className={classNames('item-label', location.pathname === link && 'selected-item')}>
        {label}
      </p>
    </div>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default React.memo(NavItem);
