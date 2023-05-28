import React, { useRef, useState, useEffect, useContext } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AuthContext } from '../../../../App';
import axios from 'axios';

function UploadAvatar({ imgAvatar }) {
  const { imgPublic, setImgPublic } = useContext(AuthContext);
  const inputFileRef = useRef(null);
  const [imageURL, setImageURL] = useState('');

  const handleClick = () => {
    inputFileRef.current.click();
  };

  const handleImageChange = async (e) => {
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
      setImgPublic(imageUrl);
    } catch (error) {
      console.error('Lỗi tải lên ảnh:', error);
    }
  };

  useEffect(() => {
    console.log('testimg', imageURL)
    if (imgAvatar !== null) {
      setImageURL(imgAvatar);
    }
  }, [imgAvatar]);
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
        {(imageURL !== '' && imageURL !== undefined) ? (
          <img src={imageURL} alt='Uploaded Image' />
        ) : (
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY1u2y6jA6w0qAvgLmi94Qeh3vv8gnZxoJg&usqp=CAU'
            alt='Image default'
          />
        )}
        <button className='btn'>Thay ảnh khác</button>
      </form>
    </>
  );
}

export default UploadAvatar;
