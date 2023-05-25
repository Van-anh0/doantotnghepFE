import React, { useState } from 'react';
import './listCV.scss';
import { BsPencilSquare } from 'react-icons/bs';
import ModalView from './Modal/modalView';
import { Link } from 'react-router-dom';
import h1 from '../../Asset/mauCV/mau-01.png';
import h2 from '../../Asset/mauCV/mau-02.png';
import h3 from '../../Asset/mauCV/mau-03.png';
import h4 from '../../Asset/mauCV/mau-04.png';
import h5 from '../../Asset/mauCV/mau-05.png';
import { useCVFormsByType } from '../../hook/data/getData';
function ListCV() {
  const [isbutton, showbutton] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const CVForms = useCVFormsByType(selectedValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='listCV'>
      <h2>Danh sách mẫu CV xin việc</h2>
      <div className='filter'>
        <h2>Bộ lọc: </h2>
        <select value={selectedValue} onChange={handleChange}>
          <option value=''>Tất cả thiết kế</option>
          <option value='Cổ điển'>Cổ điển</option>
          <option value='Thanh lịch'>Thanh lịch</option>
          <option value='Hiện đại'>Hiện đại</option>
        </select>
      </div>
      <div className='components'>
        {CVForms && Array.isArray(CVForms) && CVForms.length > 0 ? (
          CVForms.map((cvForm) => (
            <div className='component__CV' key={cvForm.id}>
              <div className='overlay'>
                <ModalView src={cvForm.imgCV} formCV={cvForm.formCV} />

                <Link to={`/cv/detail/${cvForm.formCV}`}>
                  <div className='btn'>
                    <BsPencilSquare />
                    Dùng mẫu
                  </div>
                </Link>
              </div>
              <img src={cvForm.imgCV} alt='' />
              <div className='typeCV'>{cvForm.typeCV}</div>
            </div>
          ))
        ) : (
          <div className='nothing_CV'>Hiện tại chưa có mẫu CV!</div>
        )}
        {/* <div className='component__CV'>
          <div className='overlay'>
            <ModalView src={h2} />

            <Link to='/cv/detail/CV2'>
              <div className='btn'>
                <BsPencilSquare />
                Dùng mẫu
              </div>
            </Link>
          </div>
          <img src={h2} alt='' />
          <div className='typeCV'>Thanh lịch</div>
          <div className='colors'>
            <div className='color red' />
            <div className='color green' />
            <div className='color red' />
            <div className='color green' />
            <div className='color blue' />
          </div>
        </div>

        <div className='component__CV'>
          <div className='overlay'>
            <ModalView src={h3} />

            <Link to='/cv/detail/CV3'>
              <div className='btn'>
                <BsPencilSquare />
                Dùng mẫu
              </div>
            </Link>
          </div>
          <img src={h3} alt='' />
          <div className='typeCV'>Thanh lịch</div>
          <div className='colors'>
            <div className='color red' />
            <div className='color green' />
            <div className='color red' />
            <div className='color green' />
            <div className='color blue' />
          </div>
        </div>

        <div className='component__CV'>
          <div className='overlay'>
            <ModalView src={h4} />

            <Link to='/cv/detail/CV4'>
              <div className='btn'>
                <BsPencilSquare />
                Dùng mẫu
              </div>
            </Link>
          </div>
          <img src={h4} alt='' />
          <div className='typeCV'>Thanh lịch</div>
          <div className='colors'>
            <div className='color red' />
            <div className='color green' />
            <div className='color red' />
            <div className='color green' />
            <div className='color blue' />
          </div>
        </div>

        <div className='component__CV'>
          <div className='overlay'>
            <ModalView src={h5} />

            <Link to='/cv/detail/CV5'>
              <div className='btn'>
                <BsPencilSquare />
                Dùng mẫu
              </div>
            </Link>
          </div>
          <img src={h5} alt='' />
          <div className='typeCV'>Thanh lịch</div>
          <div className='colors'>
            <div className='color red' />
            <div className='color green' />
            <div className='color red' />
            <div className='color green' />
            <div className='color blue' />
          </div>
        </div>

        <div className='component__CV'>
          <div className='overlay'>
            <ModalView src='https://cdn1.vieclam24h.vn/images/assets/img/cv34-0559BC.png' />

            <Link to='/cv/detail/CV6'>
              <div className='btn'>
                <BsPencilSquare />
                Dùng mẫu
              </div>
            </Link>
          </div>
          <img src='https://cdn1.vieclam24h.vn/images/assets/img/cv34-0559BC.png' alt='' />
          <div className='typeCV'>Cổ điển</div>
          <div className='colors'>
            <div className='color red' />
            <div className='color green' />
            <div className='color red' />
            <div className='color green' />
            <div className='color blue' />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ListCV;
