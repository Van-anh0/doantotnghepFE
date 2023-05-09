import React from 'react';
import './history.scss';
import {ImPencil2} from 'react-icons/im'
import {FiDownload} from 'react-icons/fi'
import {RiDeleteBinLine} from 'react-icons/ri'
function HistoryCV() {
  return (
    <div className='history_CV'>
      <h2>Lịch sử CV</h2>

      <div className='list_history_components'>
        <div className='history_component'>
          <img src='https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916066.jpg?w=2000' alt='' />
          <div className='custom_history'>
            <div className='content'>
              <div className='title'>Lưu Nguyễn Vân Anh - Lập trình viên Front End</div>
              <div className='dateTime'>Ngày cập nhật: 14/05/2022</div>
              <div className='function'>
                <div className='btn'><ImPencil2/> Sửa CV</div>
                <div className='btn'><FiDownload/> Tải xuống</div>
              </div>
            </div>
          </div>
          <div className='remove-icon'><RiDeleteBinLine/> Xoá CV</div>
        </div>

        <div className='history_component'>
          <img src='https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916066.jpg?w=2000' alt='' />
          <div className='custom_history'>
            <div className='content'>
              <div className='title'>Lưu Nguyễn Vân Anh - Lập trình viên Front End</div>
              <div className='dateTime'>Ngày cập nhật: 14/05/2022</div>
              <div className='function'>
                <div className='btn'><ImPencil2/> Sửa CV</div>
                <div className='btn'><FiDownload/> Tải xuống</div>
              </div>
            </div>
          </div>
          <div className='remove-icon'><RiDeleteBinLine/> Xoá CV</div>
        </div>

        <div className='history_component'>
          <img src='https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916066.jpg?w=2000' alt='' />
          <div className='custom_history'>
            <div className='content'>
              <div className='title'>Lưu Nguyễn Vân Anh - Lập trình viên Front End</div>
              <div className='dateTime'>Ngày cập nhật: 14/05/2022</div>
              <div className='function'>
                <div className='btn'><ImPencil2/> Sửa CV</div>
                <div className='btn'><FiDownload/> Tải xuống</div>
              </div>
            </div>
          </div>
          <div className='remove-icon'><RiDeleteBinLine/> Xoá CV</div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCV;
