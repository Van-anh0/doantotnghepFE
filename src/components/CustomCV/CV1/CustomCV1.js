import React from 'react'
import "./CustomCV1.scss"
import { useParams } from 'react-router-dom'
import actionCVApi from '../../../actions/actionCV'
import { useEffect, useState } from 'react'
function CustomCV1() {

  const { email } = useParams()
  const [cvInfo, setCvInfo] = useState(null)

  console.log("email",email)

  useEffect(() => {
    actionCVApi.getCVemail(email)
      .then((data) => {
        setCvInfo(data)
        console.log("data", data)
      })
      .catch((error) => {
        console.log("error",error.messenger)
      });
  }, [email])

  return (
    <div className="customcv">
        
        <div className="fullname">
                    <strong>{cvInfo?.fullName}</strong>
        </div>
        <div className="duty">
                    Nhân viên Kinh Doanh
        </div>
        
        <div className="info">
            Ngày sinh: 01-01-1992 <br/>
            Giới tính: Nữ <br/>
            Điện thoại: {cvInfo?.phone} <br/>
            Email: {cvInfo?.email}<br/>
            Địa chỉ: Quận 1, TPHCM

        </div>
        <br/>
        <div className="target">
         <strong> MỤC TIÊU NGHỀ NGHIỆP</strong><br/>
          
          - Mong muốn học hỏi kinh nghiệm ở môi trường làm việc chuyên nghiệp, năng động.
          <br/>
          - Có cơ hội thăng tiến cao, thành công trong công việc
        </div>
        <br/>
        <div className="Education">
          <strong>Đại học kinh tế</strong> <br/>
          Chuyên ngành: Quản trị kinh Doanh<br/>
          Bằng cấp: Cử nhân đại học<br/>
          Tốt nghiệp loại: khá
        </div>
        <br/>
        <div className="work-ex">
          <strong>KINH NGHIỆM LÀM VIỆC</strong><br/>
          Siêu việt group <br/>
          Chuyên viên kinh Doanh<br/>
          Mô tả:<br/>
          -Liên hệ với khách hàng để tư vấn và tìm hiểu nhu cầu khách hàng. <br/>
          -Thuyết phục khách hàng, chốt các gói hợp đồng phù hợp với từng khách hàng.<br/>
          -Làm hợp đồng và xử lý thanh toán.<br/>
          -Chăm sóc khách hàng sau khi thanh toán.<br/><br/>
          Thành tích đạt được:<br/>
          -Hoàn thành nhiệm vụ được giao.<br/>

        </div>
        <br/>
        <div className="interest">
          <strong>Sở thích:</strong><br/>
          Du lịch, nghe nhạc, thể thao, đọc sách.
        </div>
        <br/>
        <div className="foreign-lg">
          <strong>Ngoại ngữ:</strong> <br/>
          TIẾNG ANH<br/>
          -Nghe: Trung bình; Nói: Trung Bình; Đọc: Trung Bình; Viết: Trung Bình
        </div>
        <br/>
        <strong>Người liên hệ</strong>
        - công ty: Siêu Việt Group<br/>
        - Họ và tên: Nguyễn Văn A<br/>
        - Số điện thoại: 02222<br/>
        - Chức vụ: Trưởng phòng<br/>
    </div>
  )
}

export default CustomCV1