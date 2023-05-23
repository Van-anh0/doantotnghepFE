import React from 'react';
import './changeColor.scss';
function ContainerColor({ handleClick }) {
  return (
    <div className='button-container'>
      Chọn màu tô điểm cho mẫu CV:
      <button onClick={() => handleClick('blue')} className='blue'></button>
      <button onClick={() => handleClick('red')} className='red'></button>
      <button onClick={() => handleClick('purple')} className='purple'></button>
      <button onClick={() => handleClick('yellow')} className='yellow'></button>
      <button onClick={() => handleClick('')} className='black'></button>
      {/* Thêm các button màu khác nếu cần */}
    </div>
  );
}

export default ContainerColor;
