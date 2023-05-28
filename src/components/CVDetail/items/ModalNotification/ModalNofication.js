import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import './ModalNofication.scss';
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import h1 from '../../../../Asset/preview.png';
import h2 from '../../../../Asset/preview-bingo.png';

export function ModalNoticeNotLogin({ open, onClose }) {
  return (
    <Modal onClose={onClose} open={open}>
      <div className='Modal__Nofication_Conponent'>
        <img src={h1} alt='oh no' />
        <div className='component_right'>
          <div className='title'>
            Ohhh, bạn chưa đăng nhập nên chưa thể sử dụng chức năng lưu CV vào lịch sử! <br />
            Hãy đăng nhập ngay để gia tăng trải nghiệm.
          </div>
          <div className='close' onClick={onClose}>
            OK
          </div>
        </div>
      </div>
    </Modal>
  );
}

export function ModalNoticeSuccess({ open, onClose }) {
  return (
    <Modal onClose={onClose} open={open}>
      <div className='Modal__Nofication_Conponent'>
        <img src={h2} alt='bingo' />
        <div className='component_right'>
          <div className='title'>
            Lưu CV thành công! <br /> Hãy vào lịch sử CV của bạn để xem lại nhé
          </div>
          <div className='close' onClick={onClose}>
            OK
          </div>
        </div>
      </div>
    </Modal>
  );
}
