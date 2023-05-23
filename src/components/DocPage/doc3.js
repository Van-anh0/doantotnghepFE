import React from "react";
import "./docPage.scss";
import IMG from './image/image3.jpg'
function Doc3() {
    return(
        <div className="content">
            <div className="doc-content">
                <h1>CV gồm những gì?</h1>
                <p>CV có thể được trình bày dưới nhiều dạng, nhiều ngôn ngữ, nhiều màu sắc, tuy nhiên mấu chốt vẫn là phải đảm bảo các thông tin liên quan tới cá nhân ứng viên, kinh nghiệm việc làm, trình độ học vấn, v.vv.. Bạn càng thể hiện tốt các thông tin trong CV thì càng dễ dàng gây ấn tượng với nhà tuyển dụng. Vậy CV gồm những gì ? Nên trình bày các thông tin ấy như thế nào?</p>
                <h2>Tiêu đề CV xin việc</h2>
                <p>Đây là một mục cần thiết khi tạo một CV bản mềm nhưng không phải ứng viên nào cũng chú ý tới. Tiêu đề CV  nên để ngắn gọn nhưng vẫn đủ những thông tin cơ bản về ứng viên cũng như vị trí công việc, việc này giúp nhà tuyển dụng dễ dàng tìm thấy hồ sơ của bạn trong số hàng chục, hàng trăm CV nhận được mỗi ngày.</p>
                <p>Cách viết tiêu đề CV đơn giản mà hiệu quả nhất là: CV - Họ và tên ứng viên - Vị trí đang ứng tuyển</p>
                <p>Ví dụ: CV - Nguyễn Minh Anh - Nhân viên kinh doanh</p>
                <h2>Thông tin cá nhân trong CV</h2>
                <p>Trong mục này hãy nêu ra những thông tin cơ bản nhất, không nên quá sa đà vào câu chữ và viết dài dòng. Nên nhớ, nhà tuyển dụng chỉ quan tâm tới những kinh nghiệm, kiến thức chuyên môn phục vụ cho công việc bạn đang ứng tuyển. Việc viết thông tin cá nhân trong CV  quá cầu kỳ sẽ vô tình khiến nhà tuyển dụng “lạc” trong lượng thông tin quá lớn và gặp khó khăn trong việc chọn lọc những thông tin đáng quan tâm.</p>

                <li>Họ và tên: Sử dụng tên thật, nên viết in hoa tất cả các chữ, đầy đủ dấu câu. Không nên ghi biệt danh vào trong mục này. Nếu muốn giới thiệu về biệt danh của mình bạn có thể chia sẻ với nhà tuyển dụng trong buổi phỏng vấn.</li>
                <li>Ngày tháng năm sinh: Sử dụng ngày tháng năm sinh trong Thẻ căn cước/Chứng minh nhân dân. Bạn có thể thể ghi theo cấu trúc ngày/tháng/năm hoặc ngày-tháng-năm.</li>
                <li>Email: Địa chỉ email ngắn gọn và tốt nhất nên chứa tên ứng viên. Nếu bạn đang sử dụng một email chứa những từ ngữ chưa được “chuyên nghiệp” lắm thì hãy nhanh tay đổi cho mình một email mới nhé.</li>
                <li>Số điện thoại liên lạc.</li>
                <li>Một số trang web nơi nhà tuyển dụng có thể kết nối hoặc tìm hiểu thêm thông tin về bạn như Facebook, Instagram, Wordpress, v.vv..</li>
                <li>Nơi ở hiện tại: Nên ghi đầy đủ từ phường/xã, quận/huyện, tỉnh/thành phố.</li>
                <div className="img"><img  src={IMG}></img><p>Ví dụ về giới thiệu bản thân trong CV</p></div>
                <h2>Mục tiêu nghề nghiệp trong CV</h2>
                <p>Mục tiêu nghề nghiệp trong CV là phần tiếp theo bạn cần lưu ý khi viết một CV. Mục tiêu nghề nghiệp không chỉ thể hiện nguyện vọng của bạn với vị trí công việc đang ứng tuyển mà còn cho thấy cách bạn đang định hướng cho tương lai của chính mình. Đó có thể là mục tiêu ngắn hạn hay dài hạn, nhưng hãy chú ý đặt mục tiêu thiết thực, phù hợp với khả năng và định hướng phát triển của bản thân. Đừng đặt mục tiêu quá thấp sẽ khiến nhà tuyển dụng cảm thấy bạn là người thiếu ý chí, nhưng đồng thời cũng đừng đặt mục tiêu quá “đao to búa lớn”. Sẽ có nhà tuyển dụng thích lắng nghe những mục tiêu “hão huyền” của bạn, nhưng họ chỉ chiếm số ít mà thôi.</p>
                
            </div>
        </div>
        
    )
}
export default Doc3;