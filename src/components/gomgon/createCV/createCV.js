import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import "./create.scss"

function CreateCV() {
    const {quill, quillRef} = useQuill()
  return (
    <div>
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef}>
        <h1 className='test'>
          <span contentEditable={false} suppressContentEditableWarning={true} style={{ userSelect: 'none' }}>FullName: </span>
          <span contentEditable={true}>Phượng</span>
        </h1>
        <h2>
          <span contentEditable={false} suppressContentEditableWarning={true} style={{ userSelect: 'none' }}>Age: </span>
          <span contentEditable={true}>16</span>
        </h2>
      </div>
    </div>
  </div>
  )
}

export default CreateCV