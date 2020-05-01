import React, { useState } from 'react';
import Form from '../components/Form/Form.jsx';

const FormControls = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  
  
  const handleUrlChange = ({ target }) => setUrl(target.value);
  const handleInputChange = ({ target }) => setMethod(target.value);
  const handleJsonBodyChange = ({ target }) => setJsonBody(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    //call fetch from hooks file here
  };

  return (
    <>
      <Form  onSubmit={handleSubmit}
        url={url}
        onUrlChange={handleUrlChange}
        method={method}
        onInputChange={handleInputChange}
        jsonBody={jsonBody}
        onJsonBodyChange={handleJsonBodyChange} />
    </>
  );
};

export default FormControls;
