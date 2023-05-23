import React from "react";
import "./docPage.scss";
import IMG from './image/image1.jpg'
function Doc1() {
    return(
        <div className="content">
            <div className="doc-content">
                <h1>CV là gì?</h1>
                <p>CV  là viết tắt của "Curriculum Vitae". Về bản chất,  CV xin việc  không phải là tờ khai lý lịch tự thuật mà là bản tóm tắt những thông tin cơ bản nhất về ứng viên, cũng như trình độ học vấn, kinh nghiệm làm việc, các kỹ năng liên quan tới công việc mà ứng viên muốn ứng tuyển. CV xin việc  được coi như “bộ mặt” của ứng viên, để lại ấn tượng ban đầu cho nhà tuyển dụng, vì vậy CV thường được chăm chút kỹ càng từ nội dung tới hình thức.</p>
                <div className="img"><img  src={IMG}></img><p>CV đóng vai trò quan trọng trong quá trình xin việc</p></div>
                <h1>CV và sơ yếu lý lịch khác nhau chỗ nào?</h1>
                <p>CV tập trung vào những thông tin liên quan tới việc làm và học vấn. Những thông tin cá nhân nêu ra trong CV đều rất cơ bản, đủ để nhà tuyển dụng biết ứng viên là ai, đã được đào tạo qua những trường lớp nào, đã làm việc tại những cơ quan, doanh nghiệp nào. </p>
                <p>Mặt khác, sơ yếu lý lịch  lại đi sâu vào thông tin về bản thân ứng viên và từng thành viên trong gia đình ứng viên. Sơ yếu lý lịch thường được yêu cầu lấy dấu công chứng tại địa phương để xác thực thông tin.</p>
                
            </div>
        </div>
        
    )
}
export default Doc1;