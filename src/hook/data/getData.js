import { useState, useEffect } from 'react';
import actionCVApi from '../../actions/actionCV';
import actionCVFormApi from '../../actions/actionCVForm';
export const useCVsByAuthor = (author, reload) => {
  const [data, setData] = useState([]);

  const fetchCVsByAuthor = async () => {
    try {
      const response = await actionCVApi.getCVauthor(author);
      //console.log('response',response.data)
      setData(response); // Cập nhật giá trị cho state data bằng response
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCVsByAuthor();
    // console.log('data',data)
  }, [author, reload]); // Gọi hàm fetchCVsByAuthor khi author thay đổi

  return data;
};

export const useCVByID = (id) => {
  const [data, setData] = useState([]);

  const fetchCVsByAuthor = async () => {
    try {
      const response = await actionCVApi.getCVByID(id);
      setData(response); // Cập nhật giá trị cho state data bằng response
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCVsByAuthor();
  }, [id]); 

  return data;
};

export const useCVFormsByType = (type) => {
  const [data, setData] = useState([]);

  const fetchCVFormsBytype = async () => {
    try {
      const response = await actionCVFormApi.getCVFormtype(type);
      //console.log('response',response.data)
      setData(response); // Cập nhật giá trị cho state data bằng response
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCVFormsBytype();
    // console.log('data',data)
  }, [type]);

  return data;
};
