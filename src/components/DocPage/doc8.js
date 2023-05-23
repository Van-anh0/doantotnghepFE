import React from 'react';
import './docPage.scss';
import IMG from './image/image2.jpg';
function Doc8() {
  return (
    <div className='content'>
      <div className='doc-content'>
        <h1>Cách gửi CV qua mail</h1>
        <p>
          Thường khi ứng tuyển bạn có nhiều lựa chọn để gửi CV cho nhà tuyển dụng, một trong số đó là gửi CV qua mail.
          Hình thức nộp CV này rất nhanh chóng và tiện lợi cho cả ứng viên và nhà tuyển dụng. Nếu bạn đang lúng túng
          trong việc trình bày một email để gửi CV tới nhà tuyển dụng, hãy tham khảo những gợi ý sau của CV Online nhé.
        </p>
        <li>
          Tiêu đề: Thư ứng tuyển + tên vị trí + tên công ty - Họ và tên
          <ul>Ví dụ: Thư ứng tuyển vị trí Digital Marketing tại công ty ABC - Nguyễn Minh Anh</ul>
        </li>
        <li> Lời mở đầu: Kính gửi Bộ phận tuyển dụng + tên công ty</li>
        <li>
          Nội dung:
          <ul>
            Giới thiệu sơ qua về bản thân như họ tên, năm sinh. Sau đó nêu ngắn gọn lý do bạn biết tới tin tuyển dụng
            của công ty.
          </ul>
          <ul>
            Hãy dành 2-3 dòng để nêu lý do bản thân bạn phù hợp với công việc này (có thể đề cập sơ qua tới kinh nghiệm
            làm việc, kỹ năng cứng, kỹ năng mềm, v.vv..)
          </ul>
          <ul>Bày tỏ mong muốn được làm việc trong môi trường năng động, chuyên nghiệp của công ty.</ul>
          <ul>
            Đính kèm CV dạng .pdf trong email. Hãy hạn chế xuất CV dưới dạng ảnh và chèn trực tiếp vào mail nhé, điều
            này có thể khiến CV của bạn bị vỡ nét hoặc co lại, rất khó để tiếp cận thông tin.
          </ul>
          <ul>Đừng quên kiểm tra một lượt địa chỉ email, nội dung email cho chính xác trước khi nhấn gửi bạn nhé.</ul>
        </li>
      </div>
    </div>
  );
}
export default Doc8;
