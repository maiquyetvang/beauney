import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL + '/api',
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return {
      ...response.data,
      ok: response.status < 400,
      statusCode: response.status,
    };
  },
  function (error) {
    if (error?.response?.status === 401) {
      console.log('🚀 ~ file: axios-config.ts:29 ~ Unauthorized');
    } else {
      console.log(
        '🚀 ~ file: axios-config.ts:31 ~ error',
        error?.response?.message,
      );
    }
    return Promise.reject(error);
  },
);

export { instance as axios };
