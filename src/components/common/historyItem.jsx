import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/common.scss';

const HistoryItem = (props) => {
  const { date, action } = props.info;

  return (
    <div className={'history-item-container'}>
      <p className={'item-date'}>{date}</p>
      <p className={'item-action'}>{action}</p>
    </div>
  );
};

HistoryItem.propTypes = {
  info: PropTypes.object.isRequired,
};

export default React.memo(HistoryItem);