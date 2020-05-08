const BODY_METHODS = ['POST', 'PUT', "PATCH"]

export const fetchRequest = (url, method = 'GET', body) => {
  return fetch(url, {
    method: method,
    // body: body ? JSON.stringify(body) : null
    body: BODY_METHODS.includes(method) ? body : null,
    header: {
      'Content-Type': BODY_METHODS.includes(method) && 'application/json'
    }
  }) 
    .then(res => res.json());
  //may need to add additional shaping here.
};

