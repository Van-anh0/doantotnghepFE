import React, { useEffect } from 'react';
import './footer.scss';
import { ImFacebook } from 'react-icons/im';
import { SiZalo } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';
import { scrollToTop } from '../../utils/scrollTop';

function Footer() {
  useEffect(() => {
    scrollToTop('instant');
  }, []);
  return (
    <div className='footer'>
      <div className='ft__components'>
        <div className='footer__component'>
          <b>Cơ quan tự quản lập trình viên trí tuệ</b>
          <div>{window.lang['footer.address']} 14 Ngô Gia Tự, Phường 12, Thành phố Đà Lạt, Lâm Đồng, Việt Nam</div>
          <div>{window.lang['footer.phone']} 09271839485</div>
        </div>
        <div className='footer__component'>
        {window.lang['footer.contact']}
          <div className='icon'>
            <div className='icon_component icon-fb'>
              <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                <ImFacebook className='while' />
              </a>
            </div>
            <div className='icon_component icon-zl'>
              <a href='https://zalo.com' target='_blank' rel='noreferrer'>
                <SiZalo className='size' />
              </a>
            </div>
            <div className='icon_component icon-gm'>
              <a href='https://gmail.com' target='_blank' rel='noreferrer'>
                <SiGmail className='red' />
              </a>
            </div>
          </div>
        </div>

        <div className='footer__component'>
          <div>{window.lang['footer.term']}</div>
          <div>{window.lang['footer.privacy']}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
