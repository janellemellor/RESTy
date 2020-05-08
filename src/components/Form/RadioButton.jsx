import React from 'react';
import PropTypes from 'prop-types';

export const RadioButtonGroup = ({ children, name, onChange }) => {
  const radioButtons = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange,
    });
  });

  return (
    <>
      {radioButtons}
    </>
  );
};

export const RadioButton = ({ method, name, value, onChange }) => (
  <>
    <input type="radio" checked={method === value} name={name} value={value} onChange={onChange} />
    <label htmlFor={value}>{value}</label>
  </>
);


RadioButtonGroup.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  method: PropTypes.string.isRequired
};

