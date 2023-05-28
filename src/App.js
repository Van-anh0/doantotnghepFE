import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Detail from './pages/Detail/detail';
import HistoryCVPage from './pages/HistoryCV/HistoryCVPage';
import ManagePage from './pages/Manage/ManagePage';
import UserPage from './pages/User/UserPage';
import Instruct from './pages/Instruct/insContainer';
import ContentDoc1 from './pages/Instruct/contentDoc1';
import ContentDoc2 from './pages/Instruct/contentDoc2';
import ContentDoc3 from './pages/Instruct/contentDoc3';
import ContentDoc4 from './pages/Instruct/contentDoc4';
import ContentDoc5 from './pages/Instruct/contentDoc5';
import ContentDoc6 from './pages/Instruct/contentDoc6';
import ContentDoc7 from './pages/Instruct/contentDoc7';
import ContentDoc8 from './pages/Instruct/contentDoc8';
import ListCompany from './pages/ListCompany/listCompany';
import languageApp from './language';
import Header from './components/Header/header';
export const AuthContext = createContext();

function App() {
  const [infoUser, setInfoUser] = useState({});
  const [imgPublic, setImgPublic] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLanguageApp, setLanguageApp] = useState({ lang: window.localStorage.getItem('lang') });
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // useEffect(()=>{
  //   console.log('testlogin =',isAuthenticated)
  // },[isAuthenticated])

  const onChangeLanguage = () => {
    if (window.localStorage.getItem('lang') === 'vi') {
      window.localStorage.setItem('lang', 'en');
      window.lang = languageApp();
      setLanguageApp({ lang: 'en' });
    } else {
      window.localStorage.setItem('lang', 'vi');
      window.lang = languageApp();
      setLanguageApp({ lang: 'vi' });
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, infoUser, setInfoUser, imgPublic, setImgPublic }}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element = {<Form/>}/> */}
            <Route path='/' element={<Header lang={isLanguageApp} onChangeLanguage={onChangeLanguage} />}>
              <Route index element={<Home />} />
              <Route path='/cv/detail/:id' element={<Detail />} />
              <Route path='/cv/history' element={<HistoryCVPage />} />
              <Route path='/cv/user' element={<UserPage />} />
              <Route path='/cv/manage' element={<ManagePage />} />
              <Route path='/cv/doc' element={<Instruct />} />
              <Route path='/cv/doc/cv-la-gi' element={<ContentDoc1 />} />
              <Route path='/cv/doc/cv-co-nhung-dang-nao' element={<ContentDoc2 />} />
              <Route path='/cv/doc/cv-gom-nhung-gi' element={<ContentDoc3 />} />
              <Route path='/cv/doc/cach-viet-cv-1' element={<ContentDoc4 />} />
              <Route path='/cv/doc/cach-viet-cv-2' element={<ContentDoc5 />} />
              <Route path='/cv/doc/cach-tao-cv' element={<ContentDoc6 />} />
              <Route path='/cv/doc/luu-y-viet-cv' element={<ContentDoc7 />} />
              <Route path='/cv/doc/cach-gui-cv' element={<ContentDoc8 />} />
              <Route path='/cv/list-company' element={<ListCompany />} />
              {/* <Route path="/detail/:email" element = {<CustomCV1/>}/>
          <Route path="/cv1" element = {<Contentcv1/>}/>
          <Route path="/cv2" element = {<Content/>}/>
          <Route path="/cv3" element = {<Content2/>}/> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
