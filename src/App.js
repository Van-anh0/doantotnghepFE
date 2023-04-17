import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home/home';
import DetailCV from './components/CVDetail/detailCV';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element = {<Form/>}/> */}
          <Route path="/" element = {<Home/>}/>
          <Route path="/cv/detail" element = {<DetailCV/>}/>
          {/* <Route path="/detail/:email" element = {<CustomCV1/>}/>
          <Route path="/cv1" element = {<Contentcv1/>}/>
          <Route path="/cv2" element = {<Content/>}/>
          <Route path="/cv3" element = {<Content2/>}/> */}
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
