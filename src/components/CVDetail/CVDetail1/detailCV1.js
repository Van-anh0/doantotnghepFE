import React, { useEffect, useRef, useState, useContext } from 'react';
import './detailCV1.scss';
import { BsGenderAmbiguous, BsTelephone } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import actionCVApi from '../../../actions/actionCV';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Uploader from '../items/Uploader';
import vi from '../../../data/vi.json';
import { AuthContext } from '../../../App';
import { ContainerColorBasic } from '../ChangeColor/ContainerColor';
import { ModalNoticeNotLogin, ModalNoticeSuccess } from '../items/ModalNotification/ModalNofication';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useCVByID } from '../../../hook/data/getData';
import { ToastContainer, toast } from 'react-toastify';
function DetailCV1() {
  const [notLoginOpen, setNotLoginOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const { infoUser, isAuthenticated, imgPublic } = useContext(AuthContext);
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
    statusCV: '',
    formCV: 'CV1',
    colorCV: '',
  });

  const [currentColor, setCurrentColor] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idCV = searchParams.get('id');
  console.log('id', idCV);
  const dataCV = useCVByID(idCV);
  console.log('dataCV', dataCV);

  const handleClickChangeColor = (color) => {
    setCurrentColor(color);
  };

  const handleSelect = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
  };

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.innerText;
    setInfoCV((prevState) => ({ ...prevState, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (isAuthenticated === true) {
      if (idCV) {
        try {
          if (imgPublic) {
            infoCV.avatarCV = imgPublic;
          }
          infoCV.colorCV = currentColor;
          infoCV.statusCV = '';
          try {
            const canvas = await html2canvas(componentRef.current, { scale: 4 });
            const imgData = canvas.toDataURL('image/jpeg');
            const formData = new FormData();
            formData.append('file', imgData);
            formData.append('upload_preset', 'alw4lzrn'); // Thay YOUR_UPLOAD_PRESET bằng upload preset của bạn từ Cloudinary

            const response = await axios.post('https://api.cloudinary.com/v1_1/dmrgrnxqy/image/upload', formData);

            const imageUrl = response.data.secure_url;
            // Lưu imageUrl vào cơ sở dữ liệu hoặc sử dụng theo ý muốn của bạn
            //console.log('URL ảnh:', imageUrl);
            infoCV.statusCV = imageUrl;
          } catch (error) {
            console.error('Lỗi tải lên ảnh statusCV:', error);
          }
          const updatedCV = await actionCVApi.updateCVByID(idCV, infoCV);
          if (updatedCV) {
            toast.success('Cập nhật thông tin CV thành công!', { position: toast.POSITION.TOP_CENTER });
          }
        } catch (err) {
          alert(`Update CV không thành công!`);
        }
      } else {
        infoCV.authorMail = infoUser.email;
        if (imgPublic) {
          infoCV.avatarCV = imgPublic;
        }
        infoCV.colorCV = currentColor;
        infoCV.statusCV = '';
        try {
          const canvas = await html2canvas(componentRef.current, { scale: 4 });
          const imgData = canvas.toDataURL('image/jpeg');
          const formData = new FormData();
          formData.append('file', imgData);
          formData.append('upload_preset', 'alw4lzrn'); // Thay YOUR_UPLOAD_PRESET bằng upload preset của bạn từ Cloudinary

          const response = await axios.post('https://api.cloudinary.com/v1_1/dmrgrnxqy/image/upload', formData);

          const imageUrl = response.data.secure_url;
          // Lưu imageUrl vào cơ sở dữ liệu hoặc sử dụng theo ý muốn của bạn
          //console.log('URL ảnh:', imageUrl);
          infoCV.statusCV = imageUrl;
        } catch (error) {
          console.error('Lỗi tải lên ảnh statusCV:', error);
        }

        actionCVApi
          .createCV(infoCV)
          .then(() => {
            // alert('Lưu mẫu cv thành công, vào lịch sử để xem lại nhé!');
            setSuccessOpen(true);
          })
          .catch((error) => {
            alert(`Lưu mẫu cv không thành công!`);
          });
      }
    } else {
      setNotLoginOpen(true);
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
      pdf.addImage(imgData, 'PNG', 7, 5, 195, 285); // 190mm = A4 width - 20mm margin
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
      <ModalNoticeNotLogin open={notLoginOpen} onClose={() => setNotLoginOpen(false)} />
      <ModalNoticeSuccess open={successOpen} onClose={() => setSuccessOpen(false)} />
      <ContainerColorBasic handleClick={handleClickChangeColor} />
      <div className='Detail_CV1'>
        <div className='Detail_CustomCV1'>
          <div ref={componentRef} className='Detail_CustomCV_Update'>
            <div className='left'>
              <Uploader imgCV={dataCV?.avatarCV} />
              <div>
                <h2>Kỹ Năng</h2>
                <div
                  suppressContentEditableWarning={true}
                  contentEditable
                  className='skills'
                  onSelect={handleSelect}
                  onInput={handleChange}
                  data-placeholder={vi['cv.skills']}
                  id='skills'
                >
                  {dataCV?.skills}
                </div>
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
                  id='language'
                >
                  {dataCV?.language}
                </div>
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
                  id='education'
                >
                  {dataCV?.education}
                </div>
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
                  id='certificate'
                >
                  {dataCV?.certificate}
                </div>
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
                  id='interests'
                >
                  {dataCV?.interests}
                </div>
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
                id='fullName'
              >
                {dataCV?.fullName}
              </div>
              <div
                suppressContentEditableWarning={true}
                contentEditable
                className='applyFor'
                onSelect={handleSelect}
                onInput={handleChange}
                data-placeholder={vi['cv.applyFor']}
                id='applyFor'
              >
                {dataCV?.applyFor}
              </div>

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
                      id='gender'
                    >
                      {dataCV?.gender}
                    </span>
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
                      id='phone'
                    >
                      {dataCV?.phone}
                    </span>
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
                      id='birthday'
                    >
                      {dataCV?.birthday}
                    </span>
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
                      id='address'
                    >
                      {dataCV?.address}
                    </span>
                  </div>
                </div>
                <div className='info mail'>
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
                      id='email'
                    >
                      {dataCV?.email}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2>Mục tiêu</h2>
                <div
                  suppressContentEditableWarning={true}
                  contentEditable
                  className='target'
                  onSelect={handleSelect}
                  onInput={handleChange}
                  data-placeholder={vi['cv.target']}
                  id='target'
                >
                  {dataCV?.target}
                </div>
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
                  id='experience'
                >
                  {dataCV?.experience}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='list_button_custom'>
          <button onClick={submit}>Lưu vào lịch sử</button>
          <button onClick={handlePrint}> In ra</button>
        </div>
      </div>
    </>
  );
}

export default DetailCV1;
