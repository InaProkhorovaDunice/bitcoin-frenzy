import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/pages.scss';

const HistoryItem = ({ info }) => {
  const { date, message } = info;

  return (
    <div className={'history-item-container'}>
      <p className={'item-date'}>{date}</p>
      <p className={'item-action'}>{message}</p>
    </div>
  );
};

HistoryItem.propTypes = {
  info: PropTypes.object.isRequired,
};

export default React.memo(HistoryItem);
