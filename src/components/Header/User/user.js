import React from 'react';
import './user.scss';

function User() {
  return (
    <div className='Component_Send_User'>
      <div className='Send_User'>
        <h2> XEM THÔNG TIN </h2>
        <h3> Xem thông tin chi tiết tài khoản</h3>
        <hr />
        <div className='Avata_Infor'>
          <img
            className='Avatar'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY1u2y6jA6w0qAvgLmi94Qeh3vv8gnZxoJg&usqp=CAU'
          />
          <div className='Information'>
            <div> Họ và tên: Não Thị Hồng Phúc </div>
            <div> Ngày sinh: 01/06/2001</div>
            <div> Địa chỉ: Phường 8-Đà Lạt -Lâm Đồng</div>
            <div> Số điện thoại: 0921840633</div>
            <div> Email: hongphucnthp00@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
