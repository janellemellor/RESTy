import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from './RadioButton';

const Form = ({ onSubmit, url, onChange, method, jsonBody }) => (
  <form onSubmit={onSubmit}>
    <fieldset>
      <input name="url-input" type="text" value={url} onChange={onChange} />
      <RadioButtonGroup name="methods" onChange={onChange} >
        <RadioButton value="GET" checked={method === 'GET'} />
        <RadioButton value="POST" checked={method === 'POST'} />
        <RadioButton value="PUT" checked={method === 'PUT'} />
        <RadioButton value="PATCH" checked={method === 'PATCH'} />
        <RadioButton value="DELETE" checked={method === 'DELETE'} />
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
