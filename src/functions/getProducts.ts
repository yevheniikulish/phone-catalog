const apiUrl = 'https://mate-academy.github.io/react_phone-catalog/';

export const request = (url: string) => {
  return fetch(apiUrl + url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};
