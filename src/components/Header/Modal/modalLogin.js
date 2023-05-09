import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillEye } from 'react-icons/ai';
import iconLogo from '../../../Asset/logo-cv-xinh.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './modalLogin.scss';
import actionUserAPI from '../../../actions/actionUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../App';
import { validateForm } from '../../../common/validate';

function ModalLogin() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const { login, setInfoUser } = useContext(AuthContext);

  const initValuesRegister = {
    username: '',
    email: '',
    password: '',
  };
  const initValuesLogin = {
    email: '',
    password: '',
  };
  const [open, setOpen] = useState(false);
  const [accountRegister, setAccount] = useState(initValuesRegister);
  const [rePassword, setRePass] = useState('');
  const [accountLogin, setAccountLg] = useState(initValuesLogin);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  //khi login thành công thì tự động tắt modal
  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);

  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setAccountLg((acc) => ({
      ...acc,
      [name]: value,
    }));
  };

  const handleInputChangeRegister = (e) => {
    const { name, value } = e.target;
    if (name === 'rePassword') {
      setRePass(value);
    } else {
      setAccount((acc) => ({
        ...acc,
        [name]: value,
      }));
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    setIsSuccess(false);
    // console.log('user', accountLogin);
    const errors = validateForm(accountLogin);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await actionUserAPI.loginUser(accountLogin);

        if (response) {
          // console.log('log response',response.token)
          console.log('thành công');

          // Hiển thị thông báo đăng nhập thành công
          toast.success('Đăng nhập thành công', { position: toast.POSITION.TOP_CENTER });
          //cho tất cả component trên toàn project biết user đã đăng nhập
          login();
          setInfoUser(response);
          //cho biết đã đến lúc thoát modal và đổi giao diện 'đăng nhập/đăng ký' thành avatar user
          setIsSuccess(true);
          setAccountLg(initValuesLogin);
        }
      } catch (error) {
        // Hiển thị thông báo đăng nhập thất bại
        toast.error('Đăng nhập thất bại bởi vì email không tồn tại hoặc mật khẩu không đúng!', {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log('thất bại');
      }
    } else {
      toast.error(errors.all, { position: toast.POSITION.TOP_CENTER });
    }
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    // console.log('user', accountRegister);
    const errors = validateForm(accountRegister, rePassword);
    if (Object.keys(errors).length === 0) {
      if (accountRegister.password === rePassword) {
        try {
          await actionUserAPI.registerUser(accountRegister);
          toast.success('Đăng ký thành công! Hãy đợi một lát để thực hiện đăng nhập!', {
            position: toast.POSITION.TOP_CENTER,
          });
          setAccount(initValuesRegister);
          setRePass('');

          // Wait for 0.01 seconds before login
          setTimeout(async () => {
            const { email, password } = accountRegister;
            const response = await actionUserAPI.loginUser({ email, password });
            if (response) {
              console.log('thành công');
              login();
              setInfoUser(response);
              setIsSuccess(true);
            }
          }, 100);
        } catch (error) {
          toast.error('Đăng ký thất bại vì email đã có người sử dụng rồi!', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        toast.error('Mật khẩu và xác nhận mật khẩu không trùng khớp!', { position: toast.POSITION.TOP_CENTER });
      }
    } else {
      toast.error(errors.all, { position: toast.POSITION.TOP_CENTER });
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className='login'>Đăng nhập / Đăng ký</div>}
    >
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList>
          <Tab>Đăng nhập</Tab>
          <Tab>Đăng ký</Tab>
        </TabList>
        <TabPanel tab='Đăng nhập' key='login'>
          <div className='Modal_Login_Component'>
            <div className='Modal__Title'>
              <img src={iconLogo} alt='' />
              <div className='close' onClick={() => setOpen(false)}>
                <IoMdCloseCircle />
              </div>
            </div>
            <div className='Modal__Detail'>
              <div>
                <h2>Xin chào!</h2>
                Hãy đăng nhập để tự do chỉnh sửa lại những CV bạn đã ưng ý nhé!
                <br />
                Bạn đã có tài khoản chưa? Nếu chưa hãy <span onClick={() => setActiveTab(1)}>đăng kí ngay nào!</span>
              </div>
              <form onSubmit={submitLogin}>
                <div className='text_input'>
                  Email
                  <div className='text_input_item'>
                    <Icon name='mail' className='icon' />
                    <input
                      type='text'
                      placeholder='Nhập email của bạn'
                      onChange={handleInputChangeLogin}
                      name='email'
                      value={accountLogin.email}
                    />
                  </div>
                </div>

                <div className='text_input'>
                  Password
                  <div className='text_input_item'>
                    <Icon name='lock' className='icon' />
                    <input
                      type='password'
                      placeholder='Nhập mật khẩu'
                      onChange={handleInputChangeLogin}
                      name='password'
                      value={accountLogin.password}
                    />
                  </div>
                </div>

                <button type='submit'>Đăng nhập</button>
              </form>
              <div className='login_with'>
                Hoặc
                <div className='with'>
                  <Button color='facebook' className='button_sm'>
                    <Icon name='facebook' /> Facebook
                  </Button>
                  <Button color='google plus' className='button_sm'>
                    <Icon name='google plus' /> Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel tab='Đăng kí' key='register'>
          <div className='Modal_Login_Component'>
            <div className='Modal__Title'>
              <img src={iconLogo} alt='' />
              <div className='close' onClick={() => setOpen(false)}>
                <IoMdCloseCircle />
              </div>
            </div>
            <div className='Modal__Detail'>
              <div>
                <h2>Chào mừng bạn đã đến với chúng tôi!</h2>
                Bạn đã có tài khoản? <span onClick={() => setActiveTab(0)}>Đăng nhập ngay!</span>
              </div>
              <form onSubmit={submitRegister}>
                <div className='text_input'>
                  Họ và tên
                  <div className='text_input_item'>
                    <Icon name='user' className='icon' />
                    <input
                      type='text'
                      placeholder='Nhập tên tài khoản của bạn'
                      name='username'
                      value={accountRegister.username}
                      onChange={handleInputChangeRegister}
                    />
                  </div>
                </div>
                <div className='text_input'>
                  Email
                  <div className='text_input_item'>
                    <Icon name='mail' className='icon' />
                    <input
                      type='text'
                      placeholder='Nhập email của bạn'
                      name='email'
                      value={accountRegister.email}
                      onChange={handleInputChangeRegister}
                    />
                  </div>
                </div>
                <div className='text_input'>
                  Mật khẩu
                  <div className='text_input_item'>
                    <Icon name='lock' className='icon' />
                    <input
                      type='text'
                      placeholder='Nhập mật khẩu của bạn'
                      name='password'
                      value={accountRegister.password}
                      onChange={handleInputChangeRegister}
                    />
                  </div>
                </div>

                <div className='text_input'>
                  Xác nhận mật khẩu
                  <div className='text_input_item'>
                    <Icon name='lock' className='icon' />
                    <input
                      type='password'
                      placeholder='Xác nhận mật khẩu'
                      name='rePassword'
                      value={rePassword}
                      onChange={handleInputChangeRegister}
                    />
                  </div>
                </div>

                <button type='submit'>Đăng ký</button>
              </form>
              {/* <div className='login_with'>
                Hoặc
                <div className='with'>
                  <Button color='facebook' className='button_sm'>
                    <Icon name='facebook' /> Facebook
                  </Button>
                  <Button color='google plus' className='button_sm'>
                    <Icon name='google plus' /> Google
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <ToastContainer />
    </Modal>
  );
}

export default ModalLogin;
