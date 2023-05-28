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

  updateUser: async (email, data) => {
    console.log('emaildata',email)
    const request = await authorizedAxiosInstance.put(`http://localhost:5000/api/user/find-email/${email}`, data);
    return request.data;
  },


};

export default actionUserApi;
