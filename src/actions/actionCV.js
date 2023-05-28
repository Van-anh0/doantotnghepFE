import authorizedAxiosInstance from '../utils/customAxios';

const actionCVApi = {
  createCV: async (data) => {
    console.log('data: ', data);
    const request = await authorizedAxiosInstance.post(`http://localhost:5000/api/cv`, data);
    return request.data;
  },

  getCVemail: async (email) => {
    const request = await authorizedAxiosInstance.get(`http://localhost:5000/api/cv/get-one/${email}`);
    return request.data;
  },

  getCVauthor: async (author) => {
    const data = {
      authorMail: author,
    };
    const request = await authorizedAxiosInstance.post(`http://localhost:5000/api/cv/filter/author-mail`, data);
    return request.data;
  },

  deleteCVById: async (id) => {
    const request = await authorizedAxiosInstance.delete(`http://localhost:5000/api/cv/${id}`);
    return request.data;
  },

  getCVByID: async (id) => {
    const request = await authorizedAxiosInstance.get(`http://localhost:5000/api/CV/${id}`);
    return request.data;
  },
};

export default actionCVApi;
