import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <>
    {JSON.stringify(response)}
  </>
);

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;
