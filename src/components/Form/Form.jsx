import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, url, onUrlChange, method, onInputChange, jsonBody, onJsonBodyChange }) => (
  <form onSubmit={onSubmit}>
    <fieldset>
      <input name="url-input" type="text" value={url} onUrlChange={onUrlChange} />
      <label> GET
        <input type="radio" name="methods" value="GET" onInputChange={onInputChange}/>
      </label>
      <label> POST
        <input type="radio" name="methods" value="POST" onInputChange={onInputChange}/>
      </label>  
      <label> PUT
        <input type="radio" name="methods" value="PUT" onInputChange={onInputChange}/>
      </label>  
      <label> PATCH
        <input type="radio" name="methods" value="PATCH" onInputChange={onInputChange}/>
      </label>  
      <label> DELETE
        <input type="radio" name="methods" value="DELETE" onInputChange={onInputChange}/>
      </label>    
      <button>Go!</button>
      <label>
        <textarea name="jsonBody" value={jsonBody} onJsonBodyChange={onJsonBodyChange}> </textarea>
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
  jsonBody: PropTypes.string.isRequired,
  onJsonBodyChange: PropTypes.func.isRequired
};

export default Form;


