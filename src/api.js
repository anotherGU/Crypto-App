import { cryptoAssets, cryptoData } from "./data";



export const fetchCrypto = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1);
  });
};

export const fetchAssets = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1);
  });
};

export const fetchCryptoFromApi = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'izJj+MLd7sxbc/GoaZUr16k7LIW6tsjkmexhiFKSxLI='
    }
  };

  return fetch('https://openapiv1.coinstats.app/coins', options)
    .then(response => response.json());
};