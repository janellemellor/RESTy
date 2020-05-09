import React, { useState } from 'react';
import Form from '../../components/Form/Form.jsx';
import Response from '../../components/Response/Response.jsx';
import History from '../../components/History/History.jsx';
import { fetchRequest } from '../../services/fetchRequest.js';

const RESTyContainer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useState([]);
  
  const handleChange = ({ target }) => {
    if(target.name === 'url-input') setUrl(target.value);
    if(target.name === 'methods') setMethod(target.value);
    if(target.name === 'json-body') setJsonBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRequest(url, method, jsonBody)
      .then(res => {
        setResponse(res);
      }); console.log(response);
  };
  
  return (
    <>
      <Form  
        onSubmit={handleSubmit}
        url={url}
        method={method}
        onChange={handleChange}
        jsonBody={jsonBody}
      />
      <Response response={response} /> 
      <History history={history} /> 
    </>
  );
};

export default RESTyContainer;

