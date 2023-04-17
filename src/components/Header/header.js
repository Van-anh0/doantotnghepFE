import React from 'react'
import logo from "../../Asset/logo-cv-xinh.png"
import "./header.scss"
function Header() {
  return (
    <div className="header">
        
        <div className="logo">
            <img src={logo} alt="" />
            CV Online
        </div>

        <div className="login">
             Đăng nhập / Đăng ký
        </div>
       
    </div>
  )
}

export default Header