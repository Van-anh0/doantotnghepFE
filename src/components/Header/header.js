import React, { useContext, useState, useEffect } from 'react';
import logo from '../../Asset/logo-cv-xinh.png';
import './header.scss';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import ModalLogin from './Modal/modalLogin';
import { AuthContext } from '../../App';
import { AiOutlineDown, AiFillCaretUp } from 'react-icons/ai';
import { BsChevronUp } from 'react-icons/bs';
import actionUserAPI from '../../actions/actionUser';
import { scrollToTop } from '../../utils/scrollTop';
import { Icon } from 'semantic-ui-react';
import {FaFlag} from 'react-icons/fa'
function Header({ lang, onChangeLanguage }) {
  const { isAuthenticated } = useContext(AuthContext);
  // useEffect(() => {
  //   console.log('datauser', infoUser);
  // }, [infoUser]);
  const scrollTop = () => scrollToTop('smooth');
  useEffect(() => {
    scrollToTop('instant');
    console.log('lang', lang);
  }, []);
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <div className='logo'>
            <img src={logo} alt='' />
            CV Online
          </div>
        </Link>
        <div className='header-end'>
          <div className='icon' onClick={onChangeLanguage}>
            <FaFlag/>
            {lang.lang === 'vi' ? 'Việt' : 'English'}
          </div>
          {isAuthenticated ? <LoginComponent /> : <ModalLogin />}
        </div>
      </div>
      <div className='onTopButton' onClick={scrollTop}>
        <BsChevronUp />
      </div>

      <Outlet />
    </>
  );
}

export default Header;

export function LoginComponent() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { logout, infoUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
      navigate('/');
    } catch (error) {
      console.log(error); // Nếu có lỗi, error sẽ chứa thông tin lỗi được trả về từ API
    }
  };

  return (
    <div className='login' onClick={handleDropdownClick}>
      <div className='user'>
        {infoUser?.avatarUser ? (
          <img src={infoUser?.avatarUser} alt='avatar user' />
        ) : (
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY1u2y6jA6w0qAvgLmi94Qeh3vv8gnZxoJg&usqp=CAU'
            alt='avatar default'
          />
        )}
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
                <li>Xem thông tin</li>
              </Link>
              <Link to='/cv/manage'>
                <li> Quản lý tài khoản</li>
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
