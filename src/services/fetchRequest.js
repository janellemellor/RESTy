export const fetchRequest = (url, method = 'GET', body) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body)
  })
    .then(res => res.json());
};

//body: check method ? body: null
//can only send a body on POST PATCH PUT