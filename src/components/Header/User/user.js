import React, { useContext } from 'react';
import './user.scss';
import { AuthContext } from '../../../App';

function User() {
  const { infoUser } = useContext(AuthContext);
  return (
    <div className='Component_Send_User'>
      <div className='Send_User'>
        <h2> XEM THÔNG TIN </h2>
        <h3> Xem thông tin chi tiết tài khoản</h3>
        <hr />
        <div className='Avata_Infor'>
          {infoUser?.avatarUser ? (
            <img
              className='Avatar'
              src={infoUser?.avatarUser}
              alt='Avatar User'
            />
          ) : (
            <img
              className='Avatar'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY1u2y6jA6w0qAvgLmi94Qeh3vv8gnZxoJg&usqp=CAU'
              alt='Avatar User default'
            />
          )}

          <div className='Information'>
            <div> Họ và tên: {infoUser?.username} </div>
            <div> Email: {infoUser?.email}</div>
            <div> Ngày sinh: {infoUser?.birthday}</div>
            <div> Địa chỉ: {infoUser?.address}</div>
            <div> Số điện thoại: {infoUser?.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
