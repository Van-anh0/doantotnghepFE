import React from 'react'
import "./footer.scss"

function Footer() {
  return (
    <div className="footer">
        <div className="ft__components">
            <div className="footer__component">
                    <b>Cơ quan tự quản lập trình viên trí tuệ</b>
                    <div>Địa chỉ: 14 Ngô Gia Tự, Phường 12, Thành phố Đà Lạt, Lâm Đồng, Việt Nam</div>
                    <div>Điện thoại: 09271839485</div>
            </div>

            <div className="footer__component">
                Liên hệ với chúng tôi
            </div>

            <div className="footer__component">
                <div>Điều khoản sử dụng</div>
                <div>Chính sách bảo mật</div>
            </div>
        </div>
    </div>
  )
}

export default Footer