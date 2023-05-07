import authorizedAxiosInstance from '../utils/customAxios';

const actionUserApi = {
  registerUser: async (data) => {
    console.log('data: ', data);
    const request = await authorizedAxiosInstance.post(`http://localhost:5000/api/auth/register`, data);
    return request.data;
  },

  loginUser: async (data) => {
    console.log('data: ', data);
    const request = await authorizedAxiosInstance.post(`http://localhost:5000/api/auth/login`, data);
    return request.data;
  },

  logoutUser: async () => {
    const request = await authorizedAxiosInstance.post(`http://localhost:5000/api/auth/logout`);
    return request.data;
  },
};

export default actionUserApi;
