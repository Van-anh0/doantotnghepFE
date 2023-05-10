import React, { useContext, useState, useEffect } from 'react';
import logo from '../../Asset/logo-cv-xinh.png';
import './header.scss';
import { Link } from 'react-router-dom';
import ModalLogin from './Modal/modalLogin';
import { AuthContext } from '../../App';
import { AiOutlineDown, AiFillCaretUp } from 'react-icons/ai';
import actionUserAPI from '../../actions/actionUser';


function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  // useEffect(() => {
  //   console.log('datauser', infoUser);
  // }, [infoUser]);
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt='' />
          CV Online
        </div>
      </Link>
      {isAuthenticated ? <LoginComponent /> : <ModalLogin />}
    </div>
  );
}

export default Header;

export function LoginComponent() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { logout, infoUser } = useContext(AuthContext);

  const handleDropdownClick = () => {
    setDropdownVisible(!isDropdownVisible);
    // console.log('testclick nà', isDropdownVisible);
  };

  //khi xử lý bất đồng bộ, chúng ta có thể sử dụng cả async/await và Promise để thực hiện việc xử lý. Áp dụng cho
  //việc gọi api từ BE
  const handleLogout = async () => {
    try {
      const response = await actionUserAPI.logoutUser();
      console.log(response); // Nếu thành công, response sẽ là một chuỗi 'User has been logged out.'
      logout();
    } catch (error) {
      console.log(error); // Nếu có lỗi, error sẽ chứa thông tin lỗi được trả về từ API
    }
  };

  return (
    <div className='login' onClick={handleDropdownClick}>
      <div className='user'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY1u2y6jA6w0qAvgLmi94Qeh3vv8gnZxoJg&usqp=CAU'
          alt=''
        />
        <div className='nameUser'>{infoUser?.username}</div>
        <AiOutlineDown />
      </div>
      {isDropdownVisible && (
        <>
          <div className='icon-up-hehe'>
            <AiFillCaretUp />
          </div>
          <div className='dropdown-menu'>
            <ul>
              <Link to='/cv/user'>
              <li>Thông tin tài khoản</li>
              </Link>
              <Link to='/cv/history'>
                <li>Lịch sử tạo CV</li>
              </Link>
              <li onClick={handleLogout}>Đăng Xuất</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
