import React from 'react';
import './user.scss';
import { Link } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi';
import{CiMail} from 'react-icons/ci';
import{BsKey}from'react-icons/bs';



function User(){
    return(
        <div className='user'>
            <h2>QUẢN LÝ TÀI KHOẢN</h2>

            <div className='list_user_component'>
            <h4>Cập nhật thông tin tài khoản của bạn</h4>
            <hr />
            <div className="tab_component">
                <button className="tablinks" id="defaultOpen"> <FiUsers/>Profile</button>
                <button className="tablinks"> <CiMail/>Email</button>
                <button className="tablinks"> <BsKey/>Password</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}
export default User