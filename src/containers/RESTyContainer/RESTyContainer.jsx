import React, { useState } from 'react';
import Form from '../../components/Form/Form.jsx';
import { fetchRequest } from '../../services/fetchRequest.js';

const RESTyContainer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  
  
  const handleUrlChange = ({ target }) => setUrl(target.value);
  const handleInputChange = ({ target }) => setMethod(target.value);
  const handleJsonBodyChange = ({ target }) => setJsonBody(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRequest(url, method, jsonBody);
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

export default RESTyContainer;
