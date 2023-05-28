import languageApp from './language';

const globalApp = (callback) => {
  window.localStorage.setItem('lang', 'vi');
  window.lang = languageApp();
  if (typeof callback === 'function') {
    return callback();
  }
};

export default globalApp;
