import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Detail from './pages/Detail/detail';
import HistoryCVPage from './pages/HistoryCV/HistoryCVPage';
import UserPage from './pages/User/UserPage';
import Instruct from './pages/Instruct/insContainer';
import ContentDoc1 from './pages/Instruct/contentDoc1'
import ContentDoc2 from './pages/Instruct/contentDoc2'
import ContentDoc3 from './pages/Instruct/contentDoc3'
import ContentDoc4 from './pages/Instruct/contentDoc4'
import ContentDoc5 from './pages/Instruct/contentDoc5'
import ContentDoc6 from './pages/Instruct/contentDoc6'
import ContentDoc7 from './pages/Instruct/contentDoc7'
import ContentDoc8 from './pages/Instruct/contentDoc8'
export const AuthContext = createContext();

function App() {
  const [infoUser, setInfoUser] = useState({});
  const [imgCV, setImgCV] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // useEffect(()=>{
  //   console.log('testlogin =',isAuthenticated)
  // },[isAuthenticated])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, infoUser, setInfoUser, imgCV, setImgCV }}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element = {<Form/>}/> */}
            <Route path='/' element={<Home />} />
            <Route path='/cv/detail/:id' element={<Detail />} />
            <Route path='/cv/history' element={<HistoryCVPage />} />
            <Route path='/cv/user' element={<UserPage />} />
            <Route path='/cv/doc' element={<Instruct />} />
            <Route path='/cv/doc/doc1' element={<ContentDoc1/>} />
            <Route path='/cv/doc/doc2' element={<ContentDoc2/>} />
            <Route path='/cv/doc/doc3' element={<ContentDoc3/>} />
            <Route path='/cv/doc/doc4' element={<ContentDoc4/>} />
            <Route path='/cv/doc/doc5' element={<ContentDoc5/>} />
            <Route path='/cv/doc/doc6' element={<ContentDoc6/>} />
            <Route path='/cv/doc/doc7' element={<ContentDoc7/>} />
            <Route path='/cv/doc/doc8' element={<ContentDoc8/>} />
            {/* <Route path="/detail/:email" element = {<CustomCV1/>}/>
          <Route path="/cv1" element = {<Contentcv1/>}/>
          <Route path="/cv2" element = {<Content/>}/>
          <Route path="/cv3" element = {<Content2/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
