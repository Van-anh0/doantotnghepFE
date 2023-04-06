import React from 'react';
import './App.css';
import CustomCV1 from './components/CustomCV/CV1/CustomCV1';
//import Content from './components/content1/Content';
//import Content2 from './components/content2/Conetent2';
//import Content3 from "./components/content3/Content3"
//import Contentcv1 from "./components/_cv1/CV1"
import Contentcv2 from "./components/cv2/CV2"
import CreateCV from './components/createCV/createCV';
import Form from './components/testForm/form';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UpdateCV from './components/testUpdate/UpdateCV';
import TextEditor from './components/testUpdate/TextEditor';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Form/>}/>
          <Route path="/detail/:email" element = {<CustomCV1/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
