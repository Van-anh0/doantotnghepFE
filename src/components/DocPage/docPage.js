import React from 'react';
import './docPage.scss';
import { Link } from 'react-router-dom';
function InsContainer() {
  return (
    <div>
      <div className='table-of-content'>
        <p>MỤC LỤC</p>
        <ul>
          <Link to='/cv/doc/cv-la-gi'>
            <li class='table-of-content-li'>CV là gì?</li>
          </Link>
          <Link to='/cv/doc/cv-co-nhung-dang-nao'>
            <li class='table-of-content-li'>CV có những dạng nào?</li>
          </Link>
          <Link to='/cv/doc/cv-gom-nhung-gi'>
            <li class='table-of-content-li'>CV gồm những gì?</li>
          </Link>
          <Link to='/cv/doc/cach-viet-cv-1'>
            <li class='table-of-content-li'>Cách viết CV xin thực tập cho sinh viên</li>
          </Link>
          <Link to='/cv/doc/cach-viet-cv-2'>
            <li class='table-of-content-li'>Cách viết CV ấn tượng cho sinh viên mới ra trường</li>
          </Link>
          <Link to='/cv/doc/cach-tao-cv'>
            <li class='table-of-content-li'>Cách tạo mẫu CV xin việc đơn giản</li>
          </Link>
          <Link to='/cv/doc/luu-y-viet-cv'>
            <li class='table-of-content-li'>Một số lưu ý khi viết CV bạn nên nắm rõ</li>
          </Link>
          <Link to='/cv/doc/cach-gui-cv'>
            <li class='table-of-content-li'>Cách gửi CV qua email</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default InsContainer;
