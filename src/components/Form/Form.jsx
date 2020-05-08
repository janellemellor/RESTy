import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from './RadioButton';

const Form = ({ onSubmit, url, onChange, method, jsonBody }) => (
  <form onSubmit={onSubmit}>
    <fieldset>
      <input name="url-input" type="text" value={url} onChange={onChange} />
      <RadioButtonGroup name="methods" onuChange={onChange} checked={method === value} >
        <RadioButton value="GET" />
        <RadioButton value="POST" />
        <RadioButton value="PUT" />
        <RadioButton value="PATCH" />
        <RadioButton value="DELETE" />
      </RadioButtonGroup>
      <button>Go!</button>
      <textarea name="json-body" value={jsonBody} onChange={onChange}> </textarea>
    </fieldset>    
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  jsonBody: PropTypes.string,
  method: PropTypes.string.isRequired
};

export default Form;
