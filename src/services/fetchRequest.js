export const fetchRequest = (url, requestOption) => {
  return fetch(url, requestOption)
    .then(res => res.json());
};

