export const validateForm = (value, rePassword) => {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  switch (true) {
    case value.email && !emailPattern.test(value.email):
      errors.all = 'Email không đúng định dạng!';
      errors.email = 'Error';
      break;

    //Check out name exists and then check the number of elements cname
    case value.username && value.username.length >= 255:
      errors.all = 'username không được quá 255 kí tự';
      errors.name = 'Error';
      break;

    case value.username && value.username.trim().length === 0:
      errors.all = 'username không được để trống';
      errors.name = 'Error';
      break;

    case !value.password:
      errors.all = 'password không được để trống!';
      errors.password = 'Error';
      break;

    case value.password && value.password.length >= 255:
      errors.all = 'password không được quá 255 kí tự!';
      errors.password = 'Error';
      break;

    case value.password && value.password.trim().length === 0:
      errors.all = 'password không được để kí tự khoảng trắng!';
      errors.password = 'Error';
      break;

    case rePassword === '':
      errors.all = 'password xác nhận lại không được để trống!';
      errors.password = 'Error';
      break;

    case rePassword && rePassword.length >= 255:
      errors.all = 'password xác nhận lại không được quá 255 kí tự!';
      errors.repassword = 'Error';
      break;

    case rePassword && rePassword.trim().length === 0:
      errors.all = 'password xác nhận lại không được để kí tự khoảng trắng!';
      errors.repassword = 'Error';
      break;
    default:
      break;
  }
  return errors;
};
