import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import './modalView.scss';
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ModalView({src}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className='btn'>
          <AiFillEye />
          Xem trước
        </div>
      }
    >
      <div className='Modal__Component'>
        <div className='Modal__Title'>
          Xem trước mẫu
          <div className='close' onClick={() => setOpen(false)}>
            <IoMdCloseCircle />
          </div>
        </div>
        <div className='Modal__Detail'>
          <div className='image'>
            <img src={src} alt='' />
          </div>
          <Link to='/cv/detail'>
            <button>Áp dụng mẫu này</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default ModalView;
