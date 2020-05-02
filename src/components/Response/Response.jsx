import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <>
    {response}
  </>
);

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;
