import authorizedAxiosInstance from '../utils/customAxios';

const actionCVFormApi = {
  getCVFormtype: async (typeCV) => {
    const data = {
      typeCV: typeCV,
    };
    const request = await authorizedAxiosInstance.post(`http://localhost:5000/api/cvform/filter`, data);
    return request.data;
  },
};

export default actionCVFormApi;
