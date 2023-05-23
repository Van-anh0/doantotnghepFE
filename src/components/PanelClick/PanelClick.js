import React, { useState } from 'react';
import './PanelClick.scss';

function PanelClick() {
  const [fontSize, setFontSize] = useState('4');
  const [FontFamily, setFontFamily] = useState('Times New Roman');

  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
  };

  const handleUnderlineClick = () => {
    document.execCommand('underline', false, null);
  };

  const handleFontSizeChange = (event) => {
    const selectedFontSize = event.target.value;
    setFontSize(selectedFontSize);
    document.execCommand('fontSize', false, selectedFontSize);
  };

  const handleFontFamilyChange = (event) => {
    const selectedFontFamily = event.target.value;
    document.execCommand('fontName', false, selectedFontFamily);
  };

  return (
    <div className='Layout_PanelClick'>
      <div className='layout_click_font'>
        <div className='fontCustom'>
          <button onClick={handleBoldClick}>
            <strong>B</strong>
          </button>
          <button onClick={handleItalicClick}>
            <i>I</i>
          </button>
          <button onClick={handleUnderlineClick}>
            <u>U</u>
          </button>
        </div>

        <div className='fontSize'>
          <div className='title'>Kích thước chữ:</div>
          <select value={fontSize} onChange={handleFontSizeChange}>
            <option value='1'>10</option>
            <option value='2'>13</option>
            <option value='3'>16</option>
            <option value='4'>18</option>
            <option value='5'>24</option>
            <option value='6'>32</option>
            <option value='7'>48</option>
          </select>
        </div>

        <div className='fontFamily'>
          <div className='title'>Kiểu chữ:</div>
          <select onChange={handleFontFamilyChange}>
            <option value='Times New Roman'>Times New Roman</option>
            <option value='Arial'>Arial</option>
            <option value='Roboto'>Roboto</option>
            <option value='Roboto Condensed'>Roboto Condensed</option>
            <option value='Tahoma'>Tahoma</option>
            <option value='Verdana'>Verdana</option>
            <option value='Cormorant'>Cormorant</option>
            <option value='Open Sans'>Open Sans</option>
            <option value='Kanit'>Kanit</option>
            <option value='Lobster'>Lobster</option>
            <option value='Open Sans'>Open Sans</option>
            <option value='Playfair Display'>Playfair Display</option>
            <option value='Fira Sans Condensed'>Fira Sans Condensed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PanelClick;
