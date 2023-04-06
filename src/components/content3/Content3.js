import React from "react";
import "./mau3.css"

function Content3(){
    return(
      <div className="box-outer">
        <div className="resume-box">
          <div className="box-1">
            <img src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong-577x600.jpg" className="profile"/>
            <div className="content">

            <h1> GIỚI THIỆU </h1>

            <p>
            Xin chào, Mình tên là Trương Ngọc Nữ. Mình đến từ TP.Hồ Chí Minh, năm nay mình 23 tuổi. 
            Mình tham gia ứng tuyển vào công ty này vì công việc và cách làm việc của công ty khiến mình bị cuốn hút. Kể từ khi biết về công ty mình đã rất mong được có cơ hội để cùng làm việc chung và phát triển bản thân, tìm hiểu và học hỏi những thứ mới mẻ. Hôm nay, mình đến đây để thực hiện giấc mơ này. 

            <br/>
            Rất mong được sự giúp đỡ của mọi người.
            </p>

            <h1> SKILLS</h1>

            <p> Grapic Desing</p>
            <div className="progress"> </div>

            <p> Web Desing</p>
            <div className="progress1"> </div>

            <p> HTML CSS</p>
            <div className="progress2"> </div>

            <p> Java Script</p>
            <div className="progress3"> </div>

            </div>
          </div>


          <div className="box-2">
            <div className="intro">
              <h1> TP. HỒ CHÍ MINH</h1>
              <hr className="hr"/>
              <div className="clearfix"></div>
              <p className="intro-p">109 Nguyễn Thị Minh Khai, Quận 1,Tp.HCM</p>
              <p> Số điện thoại +(84)0921567922</p>
              <p> Email: ngocnu@gmail.com</p>
            </div>

          </div>
          
        </div>
      </div>
    )
}

export default Content3;