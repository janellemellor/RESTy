import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, url, onUrlChange, response }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={url} onChange={onUrlChange} />
    <label> GET
      <input type="radio" name="methods" value="get"/>
    </label>
    <label> POST
      <input type="radio" name="methods" value="post"/>
    </label>  
    <label> PUT
      <input type="radio" name="methods" value="put"/>
    </label>  
    <label> PATCH
      <input type="radio" name="methods" value="patch"/>
    </label>  
    <label> DELETE
      <input type="radio" name="methods" value="delete"/>
    </label>    
    <button>Go!</button>
    <label>
      <textarea value={response} > 
      </textarea>
    </label>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  response: PropTypes.string.isRequired 


};

export default Form;


