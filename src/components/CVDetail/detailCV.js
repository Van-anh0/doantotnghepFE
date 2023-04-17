import React from 'react'
import "./detailCV.scss"

function DetailCV() {
  return (
    <div className="Detail_CV">
        <div className="Detail_CustomCV">
            <div className="Detail_CustomCV_Update">
                <div className="left">
                    <img src="https://mgvinhhai.edu.vn/wp-content/uploads/HOT-Hinh-anh-girl-xinh-anime-sexy-va-quyen-ru-1024x1024.jpg" alt="" />
                    <div className="skill">
                        KỸ NĂNG
                        kỹ năng
                    </div>
                    <div className="language">
                        NGOẠI NGỮ
                        ngoại ngữ
                    </div>

                    <div className="interest">
                        SỞ THÍCH
                        sở thích
                    </div>
                </div>

                <div className="right">
                    <div className="fullName">
                        HỌ VÀ TÊN
                    </div>
                    <div className="titleCV">
                        TIÊU ĐỀ CV
                    </div>

                    <div className="infoBasic">
                        <div>Giới tính</div>
                        <div>Điện thoại</div>
                        <div>Ngày sinh</div>
                        <div>Địa chỉ</div>
                        <div>Email</div>
                    </div>

                    <div className="target">
                        MỤC TIÊU NGHỀ NGHIỆP
                        mục tiêu nghề nghiệp
                    </div>

                    <div className="workExperience">
                        KINH NGHIỆM LÀM VIỆC
                    </div>

                    <div className="education">
                        HỌC VẤN
                    </div>

                    <div className="certificate">
                        CHỨNG CHỈ
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailCV