import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, url, onUrlChange, method, onInputChange, response, onResponseChange }) => (
  <form onSubmit={onSubmit}>
    <fieldset>
      <input name="url-input" type="text" value={url} onUrlChange={onUrlChange} />
      <label> GET
        <input type="radio" name="methods" value={method} onInputChange={onInputChange}/>
      </label>
      <label> POST
        <input type="radio" name="methods" value={method} onInputChange={onInputChange}/>
      </label>  
      <label> PUT
        <input type="radio" name="methods" value={method} onInputChange={onInputChange}/>
      </label>  
      <label> PATCH
        <input type="radio" name="methods" value={method} onInputChange={onInputChange}/>
      </label>  
      <label> DELETE
        <input type="radio" name="methods" value={method} onInputChange={onInputChange}/>
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
  onInputChange: PropTypes.func.isRequired,
  response: PropTypes.string.isRequired,
  onResponseChange: PropTypes.func.isRequired
};

export default Form;


