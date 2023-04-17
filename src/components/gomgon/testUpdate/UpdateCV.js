import React, {useState} from 'react'
import {useQuill} from "react-quilljs"
import 'quill/dist/quill.snow.css'; 
function UpdateCV() {
    
        const [education, setEducation] = useState("cvData.education");
        const {quill, quillRef} = useQuill()
      
  return (
    <div>
      <h2>Education</h2>
      <div ref={quillRef}
        value={education}
        modules={{ toolbar: true }}
      />
    </div>
  )
}

export default UpdateCV