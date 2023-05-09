import React from 'react';

function test() {
  return (
    <div className='footer__component'>
      Liên hệ với chúng tôi
      <div className='icon'>
        <div className='icon_component icon-fb'>
          <a href='https://facebook.com'>
            <ImFacebook className='while' />
          </a>
        </div>
        <div className='icon_component icon-zl'>
          <a href='https://zalo.com'>
            <SiZalo className='size' />
          </a>
        </div>
        <div className='icon_component icon-gm'>
          <a href='https://gmail.com'>
            <SiGmail className='red' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default test;
