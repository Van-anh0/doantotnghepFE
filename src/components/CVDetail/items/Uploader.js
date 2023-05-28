import React, { useRef, useState, useEffect, useContext } from 'react';
import './Uploader.scss';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import avatar from '../../../Asset/avatar-default.jpg';
import { AuthContext } from '../../../App';
import axios from 'axios';


function Uploader() {
  const { imgPublic, setImgPublic } = useContext(AuthContext);
  const inputFileRef = useRef(null);
  const [imageURL, setImageURL] = useState('');

  const handleClick = () => {
    inputFileRef.current.click();
  };

  const handleImageChange = async (e) => {
    // const selectedFile = event.target.files[0];
    // const objectURL = URL.createObjectURL(selectedFile);
    // setImageURL(objectURL);
    // console.log('test imgurl', imageURL);

    // const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.onloadend = async () => {
    //setImageURL(reader.result);


    const file = e.target.files[0];
    //lấy cái link url blob local này để load ra ngay lập tức
    const objectURL = URL.createObjectURL(file);
    setImageURL(objectURL);

    //Tiếp theo lưu cái file ảnh vào formData rồi đẩy lên Cloudinary rồi lấy url image về để lưu vào database
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'alw4lzrn'); // Thay YOUR_UPLOAD_PRESET bằng upload preset của bạn từ Cloudinary
    
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dmrgrnxqy/image/upload', formData);
    
      const imageUrl = response.data.secure_url;
      // Lưu imageUrl vào cơ sở dữ liệu hoặc sử dụng theo ý muốn của bạn
      console.log('URL ảnh:', imageUrl);
      setImgPublic(imageUrl);
    } catch (error) {
      console.error('Lỗi tải lên ảnh:', error);
    }
    

    //};
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };


  return (
    <>
      <form action='action' className={imageURL === '' ? 'form_uploadimg' : 'form_uploadimg yes'} onClick={handleClick}>
        <input
          type='file'
          accept='image/*'
          ref={inputFileRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        {imageURL !== '' ? <img src={imageURL} alt='Uploaded Image' /> : <img src={avatar} alt='Image default' />}
     
        <button className='btn'>Thay ảnh khác</button>
      </form>
    </>
  );
}

export default Uploader;
