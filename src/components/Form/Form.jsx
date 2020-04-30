import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, url, onUrlChange, method, response, onResponseChange }) => (
  <form onSubmit={onSubmit}>
    <fieldset>
      <input name="url-input" type="text" value={url} onUrlChange={onUrlChange} />
      <label> GET
        <input type="radio" name="methods" value={method}/>
      </label>
      <label> POST
        <input type="radio" name="methods" value={method}/>
      </label>  
      <label> PUT
        <input type="radio" name="methods" value={method}/>
      </label>  
      <label> PATCH
        <input type="radio" name="methods" value={method}/>
      </label>  
      <label> DELETE
        <input type="radio" name="methods" value={method}/>
      </label>    
      <button>Go!</button>
      <label>
        <textarea name="response" value={response} onResponseChange={onResponseChange}> </textarea>
      </label>
    </fieldset>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  onResponseChange: PropTypes.func.isRequired
};

export default Form;


