import authorizedAxiosInstance from "../utils/customAxios"

const actionCVApi = {
    createCV: async (data) => {
      console.log("data: ", data);
      const request = await authorizedAxiosInstance.post(
        `http://localhost:5000/api/cv`,
        data
      );
      return request.data;
    },
  

    getCVemail: async (email) => {
      const request = await authorizedAxiosInstance.get(
        `http://localhost:5000/api/cv/get-one/${email}`,
      );
      return request.data;
    },
  };

export default actionCVApi;

  
