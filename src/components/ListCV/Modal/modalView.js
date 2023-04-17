import React from 'react'
import {Button, Modal } from 'semantic-ui-react'
import "./modalView.scss"
import {IoMdCloseCircle} from "react-icons/io"
import {AiFillEye} from "react-icons/ai"
function ModalView() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
      <div className="btn">
          <AiFillEye/>
          Xem trước
      </div>
      }
    >
      <div className="Modal__Component">
        <div className="Modal__Title">
          Xem trước mẫu
          <div className="close" onClick={() => setOpen(false)}>
             <IoMdCloseCircle/>
          </div>
        </div>
        <div className="Modal__Detail">
            <div className="image">
                <img src="https://cdn1.vieclam24h.vn/images/assets/img/cv34-0559BC.png" alt="" />
            </div>
            <button>Áp dụng mẫu này</button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalView