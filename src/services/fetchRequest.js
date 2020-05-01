export const fetchRequest = (url, method = 'GET', body) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body)
  })
    .then(res => res.json());
};

