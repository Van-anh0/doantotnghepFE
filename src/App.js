import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Detail from './pages/Detail/detail';
import HistoryCVPage from './pages/HistoryCV/HistoryCVPage';
import UserPage from './pages/User/UserPage';
export const AuthContext = createContext();

function App() {
  const [infoUser, setInfoUser] = useState({})
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
    <AuthContext.Provider value={{ isAuthenticated, login, logout, infoUser, setInfoUser }}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element = {<Form/>}/> */}
            <Route path='/' element={<Home />} />
            <Route path='/cv/detail' element={<Detail />} />
            <Route path='/cv/history' element={<HistoryCVPage />} />
            <Route path='/cv/user' element={<UserPage />} />
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
