import React, { useRef, useState } from 'react';
import './Uploader.scss';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import avatar from '../../../Asset/avatar-default.jpg'
function Uploader() {
  const inputFileRef = useRef(null);
  const [imageURL, setImageURL] = useState('');

  const handleClick = () => {
    inputFileRef.current.click();
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const objectURL = URL.createObjectURL(selectedFile);
    setImageURL(objectURL);
    console.log("test imgurl",imageURL)
  };

  return (
    <>
      <form action='action' className={imageURL === ''? 'form_uploadimg':'form_uploadimg yes'} onClick={handleClick}>
        <input
          type='file'
          accept='image/*'
          ref={inputFileRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        {imageURL !==''? <img src={imageURL} alt='Uploaded Image' />:<img src={avatar} alt='Image default' />}
        <button className='btn'>Thay ảnh khác</button>
      </form>
      
    </>
  );
}

export default Uploader;
