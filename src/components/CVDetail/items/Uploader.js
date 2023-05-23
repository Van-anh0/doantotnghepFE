import React, { useRef, useState, useEffect, useContext } from 'react';
import './Uploader.scss';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import avatar from '../../../Asset/avatar-default.jpg';
import { AuthContext } from '../../../App';

function Uploader() {
  const { imgCV, setImgCV } = useContext(AuthContext);
  const inputFileRef = useRef(null);
  const [imageURL, setImageURL] = useState('');

  const handleClick = () => {
    inputFileRef.current.click();
  };

  const handleImageChange = (e) => {
    // const selectedFile = event.target.files[0];
    // const objectURL = URL.createObjectURL(selectedFile);
    // setImageURL(objectURL);
    // console.log('test imgurl', imageURL);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageURL(reader.result);
      //console.log('dataimg', reader.result)
      // Convert to base64 string
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      setImgCV(base64String)
      // console.log(base64String);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // useEffect(() => {
  //   if (imageURL !== '') {
  //     setImgCV(imageURL);
  //   }
  // }, [imageURL]);

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
