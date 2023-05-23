import React, { useContext, useState, useEffect } from 'react';
import './history.scss';
import { ImPencil2 } from 'react-icons/im';
import { FiDownload } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCVsByAuthor } from '../../hook/data/getData';
import { handleDeleteCVById } from '../../hook/data/deleteData';
import { AuthContext } from '../../App';
import { momentDayMonthYear } from '../../hook/moment/formatDay';
import { ToastContainer, toast } from 'react-toastify';

function HistoryCV() {
  const { infoUser } = useContext(AuthContext);
   const authorMail = infoUser.email;
   const [reload, setReload] = useState(false);
   const listData = useCVsByAuthor(authorMail, reload);

  const handleDeleteClick = async (id) => {
    const result = await handleDeleteCVById(id);
    if (result) {
      // Xóa thành công, cập nhật lại danh sách
      setReload(!reload)
    } else {
      // Xóa thất bại, hiển thị thông báo lỗi
      toast.error('Ỏ, xóa không thành công rùi nà!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    // load lại component khi mà reload và listData thay đổi
  }, [reload, listData]);

  return (
    <div className='history_CV'>
      <ToastContainer />
      <h2>Lịch sử CV</h2>

      <div className='list_history_components'>
        {listData && Array.isArray(listData) && listData.length > 0 ? (
          listData?.map((cv) => {
            const src = `data:image/jpeg;base64,${cv.avatarCV}`;
            return (
              <div key={`cv-${cv._id}`} className='history_component'>
                <img src={src} alt='' />
                <div className='custom_history'>
                  <div className='content'>
                    <div className='title'>
                      {cv.fullName} - {cv.applyFor}
                    </div>
                    <div className='dateTime'>Ngày cập nhật: {momentDayMonthYear(cv.updatedAt)}</div>
                    <div className='function'>
                      <div className='btn'>
                        <ImPencil2 /> Sửa CV
                      </div>
                      <div className='btn bg'>
                        <FiDownload /> Tải xuống
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ở trong onClick đưa vô như thế này: handleDeleteCVById(cv._id) là gọi ngay khi render chứ không phải
                là gọi khi người dùng bấm nút. Phải gọi thế này: handleDeleteCVById 
                hoặc thế này khi có tham số () => handleDeleteCVById(cv._id) */}
                <div className='remove-icon' onClick={() => handleDeleteClick(cv._id)}>
                  <RiDeleteBinLine /> Xoá CV
                </div>
              </div>
            );
          })
        ) : (
          <div className='nothing_history'>Không có lịch sử nào cả!</div>
        )}

        {/* <div className='history_component'>
          <img src='https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916066.jpg?w=2000' alt='' />
          <div className='custom_history'>
            <div className='content'>
              <div className='title'>Lưu Nguyễn Vân Anh - Lập trình viên Front End</div>
              <div className='dateTime'>Ngày cập nhật: 14/05/2022</div>
              <div className='function'>
                <div className='btn'>
                  <ImPencil2 /> Sửa CV
                </div>
                <div className='btn'>
                  <FiDownload /> Tải xuống
                </div>
              </div>
            </div>
          </div>
          <div className='remove-icon'>
            <RiDeleteBinLine /> Xoá CV
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HistoryCV;
