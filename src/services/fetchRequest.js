export const fetchRequest = (url, {
  method: 'POST',
  body: JSON.stringify()
}) => {
  return fetch(`${url}`);
};

