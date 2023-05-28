import React, {useState, useContext} from 'react';
import './manage.scss';
import { AiOutlineSave } from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UploadAvatar from './UploadAvatar/UploadAvatar';
import { AuthContext } from '../../../App';
import actionUserApi from '../../../actions/actionUser';
import { ToastContainer, toast } from 'react-toastify';

function Manage() {
  const [activeTab, setActiveTab] = useState(0);
  const { infoUser, setInfoUser, imgPublic} = useContext(AuthContext);
  const [accountInfo, setAccountInfo] = useState(infoUser);
  

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      if(imgPublic){
        accountInfo.avatarUser = imgPublic
      }
      
      // Gọi API và cập nhật thông tin người dùng
      const updatedUser = await actionUserApi.updateUser(accountInfo.email, accountInfo);
      toast.success('Cập nhật thông tin thành công!', { position: toast.POSITION.TOP_CENTER });
     //console.log('Thông tin người dùng đã được cập nhật:', updatedUser);
      if(updatedUser){
        setInfoUser(updatedUser)
      }
  
    } catch (error) {
      console.log('Lỗi khi cập nhật thông tin người dùng:', error);
      // Xử lý lỗi (nếu cần)
    }
  };

  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setAccountInfo((acc) => ({
      ...acc,
      [name]: value,
    }));
  };

  return (
    <div className='QLuser'>
       <ToastContainer />
      <h2>QUẢN LÝ TÀI KHOẢN</h2>
      <h3>Cập nhật thông tin tài khoản của bạn</h3>
      <hr />
      <div className='list_user_component'>
        <div className='tab_user_list'>
          <ul>
            <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
              Profile
            </li>
            {/* <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
              Password
            </li> */}
          </ul>
        </div>
        <div className='tab_component'>
          <div className={activeTab === 0 ? 'active' : ''}>
            <h2>Hồ Sơ</h2>
            <h4>Đổi Avatar:</h4>
            <UploadAvatar imgAvatar={accountInfo?.avatarUser}/>
            <form onSubmit={submitLogin}>
                <div className='text_input'>
                 <h4>Tên tài khoản:</h4>
                  <div className='text_input_item'>
                    {/* <Icon name='mail' className='icon' /> */}
                    <input
                      type='text'
                      placeholder='Nhập họ tên của bạn'
                      onChange={handleInputChangeLogin}
                      name='username'
                      value={accountInfo?.username}
                    />
                  </div>
                </div>

                <div className='text_input'>
                 <h4> Ngày sinh:</h4>
                  <div className='text_input_item'>
                    {/* <Icon name='lock' className='icon' /> */}
                    <input
                      type='text'
                      placeholder='Nhập ngày sinh của bạn'
                      onChange={handleInputChangeLogin}
                      name='birthday'
                      value={accountInfo?.birthday}
                    />
                  </div>
                </div>

                <div className='text_input'>
                  <h4>Số điện thoại:</h4>
                  <div className='text_input_item'>
                    {/* <Icon name='lock' className='icon' /> */}
                    <input
                      type='text'
                      placeholder='Nhập số điện thoại của bạn'
                      onChange={handleInputChangeLogin}
                      name='phone'
                      value={accountInfo?.phone}
                    />
                  </div>
                </div>

                <div className='text_input'>
                 <h4> Địa chỉ:</h4>
                  <div className='text_input_item'>
                    {/* <Icon name='lock' className='icon' /> */}
                    <input
                      type='text'
                      placeholder='Nhập địa chỉ của bạn'
                      onChange={handleInputChangeLogin}
                      name='address'
                      value={accountInfo?.address}
                    />
                  </div>
                </div>

                <button type='submit'>Cập nhật thông tin</button>
              </form>
          </div>

          {/* <div className={activeTab === 1 ? 'active' : ''}>
            <h2>Đổi mật khẩu</h2>
            <h4>Password hiện tại</h4>
            <TextField className='outlined-basic' label='' variant='outlined' />
            <h4>Password mới</h4>
            <TextField className='outlined-basic' label='' variant='outlined' />
            <h4>Nhập lại password mới</h4>
            <TextField className='outlined-basic' label='' variant='outlined' />
            <Button variant='contained'>Cập nhật mật khẩu</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Manage;
