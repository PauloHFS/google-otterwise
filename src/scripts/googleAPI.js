import 'regenerator-runtime/runtime';
require('dotenv').config();

const getSearch = async query => {
  try {
    return await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${query}`,
      {
        method: 'GET',
        headers: {
          'x-user-agent': 'desktop',
          'x-proxy-location': 'BR',
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export { getSearch };
