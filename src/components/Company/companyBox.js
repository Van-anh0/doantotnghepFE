import React from 'react';
import './companyBox.scss';
import icon from './image1.png';
import { Link } from 'react-router-dom';
import IMG from '../DocPage/image/image5.jpg';
function CompanyBox() {
  return (
    <div>
      <div className='hidden-cb'>
        <div className='bell-message-cb' role='button'>
          <div className='tool-tip-cb'>
            <Link to='/cv/list-company'>
              <p className='p1'>
                <strong>Thông tin tuyển dụng</strong>
              </p>
              <img src={IMG}></img>
              <p className='p2'>Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn</p>
            </Link>
          </div>
          <img className='img-cb' src={icon} alt=''></img>
        </div>
      </div>
    </div>
  );
}
export default CompanyBox;
