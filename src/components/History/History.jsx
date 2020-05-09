import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  const requestHistory = history.map((item, i) => (
    <li key={i}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <ul>
      {requestHistory}  
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default History;
