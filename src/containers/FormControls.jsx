import React, { useState } from 'react';
import Form from '../components/Form/Form.jsx';

const FormControls = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  
  
  //handleUrlChange
  //handleInputChange
  //handleResponseChange

  const handleSubmit = (event) => {
    event.preventDefault();
    //call fetch from hooks file
  };

  return (
    <>
      <Form  onSubmit={handleSubmit}
        url={url}
        onUrlChange={handleUrlChange}
        method={method}
        onInputChange={handleInputChange}
        jsonBody={jsonBody}
        onResponseChange={handleResponseChange} />
    </>
  );
};

FormControls.propTypes = {

};

export default FormControls;