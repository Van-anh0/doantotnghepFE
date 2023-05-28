import React from 'react';
import './docPage.scss';
import IMG from './image/image2.jpg';
function Doc2() {
  return (
    <div className='content'>
      <div className='doc-content'>
        <h1>CV có những dạng nào?</h1>
        <p>
          Khi nộp CV xin việc cho nhà tuyển dụng ứng viên luôn có hai sự lựa chọn, hoặc CV bản cứng hoặc CV bản mềm. Vậy
          sự khác nhau giữa hai dạng CV này là gì? Khi nào cần sử dụng CV bản cứng và khi nào cần sử dụng CV bản mềm?
        </p>
        <h2>CV bản mềm</h2>
        <p>
          CV bản mềm/CV online là CV xin việc được thực hiện trên máy tính, có thể trình bày trên công cụ Microsoft Word
          (sử dụng cả online lẫn offline), trên trang tính Google Document hoặc trên các nền tảng hỗ trợ tạo CV chuẩn
          như TopCV. Ứng viên tự điền các thông tin cá nhân, học vấn, kinh nghiệm việc làm vào trang và sau đó nhấn lưu.
          CV bản mềm được sử dụng khi ứng viên ứng tuyển vào các vị trí việc làm được đăng tuyển online, có thể nộp CV
          cho nhà tuyển dụng trực tiếp hoặc thông qua các nền tảng tuyển dụng khác. Nhà tuyển dụng sẽ nhận và sau đó
          tiến hành đánh giá CV ngay sau đó. Ngoài ra, đối với một số trường hợp ứng việc được yêu cầu hoặc có nhu cầu
          phỏng vấn trực tuyến thì CV bản mềm hay CV online cũng sẽ phát huy tối đa công dụng của mình.
        </p>
        <li>Ưu điểm CV bản mềm: Tiện dụng, đa dạng về màu sắc và nội dung, dễ dàng sửa chữa.</li>
        <li>
          Nhược điểm CV bản mềm: Dễ gặp phải tình trạng lỗi phông chữ trên một số định dạng, không tương thích với một
          số công cụ gõ văn bản .
        </li>
        <div className='img'>
          <img src={IMG}></img>
          <p>CV bản mềm được sử dụng rộng rãi bởi tính tiện dụng, đa dạng về màu sắc, mẫu mã</p>
        </div>
        <h2>CV bản cứng</h2>
        <p>
          Sau khi in CV bản mềm ra giấy chúng ta có CV bản cứng. CV xin việc bản cứng thường được được ứng viên mang tới
          buổi phỏng vấn trực tiếp, ngoài ra, nhà tuyển dụng khi tham gia phỏng vấn cũng rất thường xuyên chuẩn bị sẵn
          cho mình một CV bản cứng được in từ CV bản mềm ứng viên đã nộp trước đó.
        </p>
      </div>
    </div>
  );
}
export default Doc2;
