import en from '../data/en.json'
import vi from '../data/vi.json';

const languageApp = () => {
  let result;
  let langLocalStorage = window.localStorage.getItem('lang');

  if (langLocalStorage === 'vi') {
    result = vi;
  } else {
    result = en;
  }

  return result;
};

export default languageApp;
