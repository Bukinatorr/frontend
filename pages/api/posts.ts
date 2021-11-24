const axios = require('axios');

export interface Post {
  id: string,
  title: string,
  body: string,
  author: string
};

export const usePostsList = async () => {
  const { data } = await axios.get("http://localhost:8080/api/v1/posts");
  
  return data;
}