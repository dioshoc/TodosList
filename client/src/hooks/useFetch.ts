export const useFetch = async (
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE',
  url: string,
  body?: any
) => {
  return fetch(url, {
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
  })
    .then(async (res) => res.json())
    .catch((err) => {
      throw err;
    });
};
