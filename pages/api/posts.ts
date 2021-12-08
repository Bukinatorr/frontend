const axios = require('axios');

export const usePostsList = async () => {
  const { data } = await axios.get('http://localhost:8080/api/v1/posts');

  return data;
};

export const usePostCreate = (params?: any) => async () => {
  return await axios.post('http://localhost:8080/api/v1/posts', params);
};
