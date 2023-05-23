import React from 'react';
import './manage.scss';
import Uploader from '../../CVDetail/items/Uploader';
import{AiOutlineSave} from'react-icons/ai';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Manage(){
    return(
        <div className='QLuser'>
            <h2>QUẢN LÝ TÀI KHOẢN</h2>

           <div className='list_user_component'>
            <h4>Cập nhật thông tin tài khoản của bạn</h4>
            <hr />
                {/*<button className="tablinks" id="defaultOpen"> <FiUsers/>Profile</button>
                <button className="tablinks"> <CiMail/>Email</button>
                <button className="tablinks"> <BsKey/>Password</button>*/}
                <div className='tab_user_list'>
                <Tabs>
                    <TabList className=" tab_component">
                        <Tab>Profile</Tab>
                        <Tab>Email</Tab>
                        <Tab>PassWord</Tab>
                        </TabList>
                        <TabPanel>
                            <div>
                            <h2>Hồ Sơ</h2>
                            <h4> Đổi Avatar</h4>
                            <h4> Tên tài khoản</h4>
                            <TextField className="outlined-basic" label="Nhập username" variant="outlined" />
                              <h4> Số điện thoại</h4>
                              <TextField className="outlined-basic" label="Nhập số điện thoại" variant="outlined" />
                              <h4> Họ tên đầy đủ</h4>
                              <TextField className="outlined-basic" label="Nhập họ tên" variant="outlined" />
                              <h4> Địa chỉ</h4>
                              <TextField className="outlined-basic" label="Nhập địa chỉ" variant="outlined" />
                              </div>
                              <div ><Button variant="contained"> <AiOutlineSave/>Lưu</Button></div>
                            </TabPanel>
                            
                            <TabPanel>
                                <h2>Quản Lý Email</h2>
                                <h4>Email</h4>
                                <TextField className="outlined-basic" label="" variant="outlined" />
                                <h4> Đổi sang email mới</h4>
                                <TextField className="outlined-basic" label="Nhập email mới" variant="outlined" />
                                <div><Button variant="contained"> Đổi Email</Button></div>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Đổi mật khẩu</h2>
                                    <h4> Password hiện tại</h4>
                                    <TextField className="outlined-basic" label="" variant="outlined" />
                                    <h4> Password mới</h4>
                                    <TextField className="outlined-basic" label="" variant="outlined" />
                                    <h4> Nhập lại password mới</h4>
                                    <TextField className="outlined-basic" label="" variant="outlined" />

                                    <div><Button variant="contained"> Cập nhật mật khẩu</Button></div>
                                </TabPanel>
                                </Tabs>
                            
                        </div>
                </div>
         </div>
        
    );
}
export default Manage