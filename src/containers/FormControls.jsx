import React from 'react';
import Form from '../components/Form/Form.jsx';

const FormControls = () => {
  
  //handleSubmit
  //handleUrlChange
  //handleInputChange
  //handleResponseChange

  return (
    <>
      <Form  onSubmit={handleSubmit}
        url={url}
        onUrlChange={handleUrlChange}
        method={method}
        onInputChange={handleInputChange}
        response={response}
        onResponseChange={handleResponseChange} />
    </>
  );
};

FormControls.propTypes = {

};

export default FormControls;