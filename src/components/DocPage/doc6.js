import React from 'react';
import './docPage.scss';
import IMG from './image/image5.jpg';
function Doc6() {
  return (
    <div className='content'>
      <div className='doc-content'>
        <h1>Cách tạo mẫu CV xin việc đơn giản</h1>
        <p>
          Vậy đâu là những cách để tạo CV xin việc đơn giản nhất? Làm sao để trình bày CV một cách khoa học nhưng vẫn đủ
          những thông tin cơ bản? Hãy tham khảo hướng dẫn viết CV đơn giản CV Online cung cấp cho bạn đọc sau đây.
        </p>
        <h2>Tạo CV online miễn phí trên CV Online</h2>
        <p>
          Cùng với sự gia tăng đáng kể của nhu cầu tuyển dụng, rất nhiều nền tảng trực tuyến đã ra đời nhằm đáp ứng nhu
          cầu của ứng viên và cả nhà tuyển dụng. Với đặc điểm sẽ sử dụng, dễ tải về máy và nộp cho nhà tuyển dụng thông
          qua thư điện tử hoặc bất cứ nền tảng kết nối nào, CV xin việc online ngày càng được ưa chuộng.
        </p>
        <div className='img'>
          <img src={IMG}></img>
          <p>Tạo và chỉnh sửa thông tin trong CV online dễ dàng</p>
        </div>
        <br></br>
        <p>
          Là một trong những người tiên phong trong công cụ tạo CV online miễn phí , CV Online đã và đang cung cấp cho
          người dùng những mẫu CV chuẩn, độc, lạ với đa dạng màu sắc, ngành nghề. Để tạo CV online đơn giản miễn phí
          trên CV Online bạn chỉ cần làm theo hướng dẫn sau đây:
        </p>
        <p>Bước 1: Truy cập vào trang chủ của CV Online, chọn Mẫu CV hoặc trực tiếp</p>
        <p>
          Bước 2: Chọn Tạo CV và chọn cho mình loại CV yêu thích. TopCV cung cấp nhiều mẫu CV đa dạng về thể loại như
          mẫu CV dòng thời gian, mẫu CV ấn tượng, mẫu CV tiêu chuẩn, mẫu CV thanh lịch, v.vv..
        </p>
        <p>
          Bước 3: Chọn ngôn ngữ và màu sắc CV. Tùy theo từng loại CV mà có những loại màu sắc khác nhau để lựa chọn, bạn
          có thể lựa chọn màu sắc phụ thuộc vào cá tính của mình hoặc đơn giản chỉ là những màu sắc khớp với logo doanh
          nghiệp để nhà tuyển dụng nhìn ra sự chỉn chu , đầu tư từng chi tiết nhỏ của bạn.
        </p>
        <p>Bước 4: Nhập thông tin theo những mục đã được chỉ định trong CV.</p>
        <p>
          Bước 5: Lưu CV. Bạn có thể xem trước CV bằng cách nhấn nút “Xem” và tải CV về máy dưới dạng .pdf. 
        </p>
      </div>
    </div>
  );
}
export default Doc6;
