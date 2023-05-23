import React, { useEffect, useRef, useState, useContext } from 'react';
import './detailCV4.scss';
import { BsGenderAmbiguous, BsTelephone } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import actionCVApi from '../../../actions/actionCV';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Uploader from '../items/Uploader';
import vi from '../../../data/vi.json';
import { AuthContext } from '../../../App';
import ContainerColor from '../ChangeColor/ContainerColor';

function DetailCV4() {
  const { infoUser, isAuthenticated, imgCV } = useContext(AuthContext);
  const componentRef = useRef(null);
  const [infoCV, setInfoCV] = useState({
    skills: '',
    language: '',
    interests: '',
    fullName: '',
    applyFor: '',
    target: '',
    experience: '',
    education: '',
    certificate: '',
    gender: '',
    phone: '',
    birthday: '',
    address: '',
    email: '',
    avatarCV: '',
    statusCV:'',
  });
  const [currentColor, setCurrentColor] = useState('');

  const handleClickChangeColor = (color) => {
    setCurrentColor(color);
  };

  const handleSelect = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
  };

  const handleChange = (e) => {
    const name = e.target.className;
    const value = e.target.innerText;
    setInfoCV((prevState) => ({ ...prevState, [name]: value }));
  };

  //   const handleContentEditableChange = (e) => {
  //     const { className, innerText } = e.target;
  //     setInfoCV((prevState) => ({
  //       ...prevState,
  //       [className]: innerText,
  //     }));
  //   };

  const submit = async (e) => {
    e.preventDefault();

    if (isAuthenticated === true) {
      infoCV.authorMail = infoUser.email;
      if (imgCV) {
        infoCV.avatarCV = imgCV;
      }

      html2canvas(componentRef.current, { scale: 4 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');
        const base64String = imgData.replace('data:', '').replace(/^.+,/, '');
        infoCV.statusCV = base64String;
      })

      actionCVApi
        .createCV(infoCV)
        .then(() => {
          // alert('Lưu mẫu cv thành công, vào lịch sử để xem lại nhé!');
          console.log('Lưu mẫu cv thành công, vào lịch sử để xem lại nhé!');
        })
        .catch((error) => {
          alert(`Lưu mẫu cv không thành công! Gà`);
        });
    } else {
      console.log('chưa đăng nhập rùi');
    }
  };

  const handlePrint = () => {
    // Tạo một ảnh chụp màn hình từ component
    html2canvas(componentRef.current, { scale: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      console.log('dataimg', imgData);
      //Tạo đối tượng PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Thêm ảnh vào PDF
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // 190mm = A4 width - 20mm margin
      const fileName = 'CV-online.pdf';
      // Lưu PDF trong callback của html2canvas
      pdf.save(fileName);
    });
  };
  //   useEffect(()=>{
  //     console.log("info",infoCV)
  //   }, [infoCV])
  return (
    <>
    <ContainerColor handleClick={handleClickChangeColor}/>
    <div className='Detail_CV4'>
      <div className='Detail_CustomCV4'>
        <div ref={componentRef} className='Detail_CustomCV_Update'>
          
        <div className={`left ${currentColor}`}>
            <Uploader />
            <div className='infoBasic'>
              <div className='info'>
                <div className={`icon ${currentColor}`}>
                  <BsGenderAmbiguous />
                </div>
                <div>
                  {vi['cv.gender']}
                  <span
                    suppressContentEditableWarning={true}
                    className='gender'
                    contentEditable
                    onSelect={handleSelect}
                    onInput={handleChange}
                  ></span>
                </div>
              </div>
              <div className='info'>
                <div className={`icon ${currentColor}`}>
                  <BsTelephone />
                </div>
                <div>
                  {vi['cv.phone']}
                  <span
                    suppressContentEditableWarning={true}
                    className='phone'
                    contentEditable
                    onSelect={handleSelect}
                    onInput={handleChange}
                  ></span>
                </div>
              </div>
              <div className='info'>
                <div className={`icon ${currentColor}`}>
                  <FaBirthdayCake />
                </div>
                <div>
                  {vi['cv.birthday']}
                  <span
                    suppressContentEditableWarning={true}
                    className='birthday'
                    contentEditable
                    onSelect={handleSelect}
                    onInput={handleChange}
                  ></span>
                </div>
              </div>
              <div className='info'>
                <div className={`icon ${currentColor}`}>
                  <HiOutlineLocationMarker />
                </div>
                <div>
                  {vi['cv.address']}
                  <span
                    suppressContentEditableWarning={true}
                    className='address'
                    contentEditable
                    onSelect={handleSelect}
                    onInput={handleChange}
                  ></span>
                </div>
              </div>
              <div className='info'>
                <div className={`icon ${currentColor}`}>
                  <HiOutlineMail />
                </div>
                <div>
                  {vi['cv.email']}
                  <span
                    suppressContentEditableWarning={true}
                    className='email'
                    contentEditable
                    onSelect={handleSelect}
                    onInput={handleChange}
                  ></span>
                </div>
              </div>
            </div>
            <div>
              <h2>Kỹ Năng</h2>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='skills'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.skills']}
              ></div>
            </div>
            <div>
              <h2>Ngoại Ngữ</h2>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='language'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.language']}
              ></div>
            </div>
        
            <div>
              <h2>Sở Thích</h2>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='interests'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.interests']}
              ></div>
            </div>
          </div>
          <div className='right'>
            <div
              suppressContentEditableWarning={true}
              contentEditable
              className='fullName'
              onSelect={handleSelect}
              onInput={handleChange}
              data-placeholder={vi['cv.fullname']}
            ></div>
            <div
              suppressContentEditableWarning={true}
              contentEditable
              className='applyFor'
              onSelect={handleSelect}
              onInput={handleChange}
              data-placeholder={vi['cv.applyFor']}
            ></div>

            
            <div>
              <h2>Mục tiêu</h2>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='target'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.target']}
              ></div>
            </div>

            <div>
              <h2>Học Vấn</h2>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='education'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.education']}
              ></div>
            </div>

            <div>
              <h2>Chứng Chỉ</h2>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='certificate'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.certificate']}
              ></div>
            </div>

            <div>
              <h2>Kinh Nghiệm Làm Việc</h2>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='experience'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.experience']}
              ></div>
            </div>

           
          </div>
         
        </div>
      </div>
      <button onClick={submit}>Lưu vào lịch sử</button>
      <button onClick={handlePrint}> In ra</button>
    </div>
    </>
  );
}

export default DetailCV4;
