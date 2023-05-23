import React from "react";
import "./docPage.scss";
import { Link } from 'react-router-dom';
function InsContainer() {
    return(
        <div>
                <div className="table-of-content">
                    <p>MỤC LỤC</p>
                    <ul>
                    <Link to='/cv/doc/doc1'><li class="table-of-content-li">CV là gì?</li></Link>
                    <Link to='/cv/doc/doc2'><li class="table-of-content-li">CV có những dạng nào?</li></Link>
                    <Link to='/cv/doc/doc3'><li class="table-of-content-li">CV gồm những gì?</li></Link>
                    <Link to='/cv/doc/doc4'><li class="table-of-content-li">Cách viết CV xin thực tập cho sinh viên</li></Link>
                    <Link to='/cv/doc/doc5'><li class="table-of-content-li">Cách viết CV ấn tượng cho sinh viên mới ra trường</li></Link>
                    <Link to='/cv/doc/doc6'><li class="table-of-content-li">Cách tạo mẫu CV xin việc đơn giản</li></Link>
                    <Link to='/cv/doc/doc7'><li class="table-of-content-li">Một số lưu ý khi viết CV bạn nên nắm rõ</li></Link>
                    <Link to='/cv/doc/doc8'><li class="table-of-content-li">Cách gửi CV qua email</li></Link>
                    </ul>
                </div>
        </div>
    )
}
export default InsContainer;