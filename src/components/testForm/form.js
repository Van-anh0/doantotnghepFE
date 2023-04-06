import React, {useState} from 'react'
import axios from 'axios';
import actionCVApi from '../../actions/actionCV';
import { Navigate } from 'react-router-dom';
function Form() {

    const [info, setInfor] =  useState({
        fullName : "",
        email:"",
        phone:""
    })
    const [isSuc, setSuc] = useState(false)

    const change = (e) =>{
        const {name, value} = e.target
        setInfor((info)=>({
            ...info,
            [name]:value
        }))
    }
    
    const submit =async (e) => {
        e.preventDefault();
        console.log("info",info)
        actionCVApi.createCV(info)
        .then(() => {
            setSuc(true)
            alert("Đăng ký thành công");
          })
        .catch((error) => {
            alert(`Email đã tồn tại`);
        });
    }
  return (
    <div>
        
        <form >
            <input type="text" name="fullName" value={info.fullName} placeholder="Full name"
            onChange = {change}/>
            <input type="text" name="email" value={info.email} placeholder="Email"
             onChange = {change}/>
            <input type="text" name="phone" value={info.phone} placeholder="Phone"
             onChange = {change}/>
            {/* <input type="text" name="fullname" value={info.fullname}/>
            <input type="text" name="fullname" value={info.fullname}/>
            <input type="text" name="fullname" value={info.fullname}/> */}
            <button onClick={submit}>Submit</button>
            {
                isSuc === true &&
                <Navigate to = {`/detail/${info.email}`}/>
            }
           
        </form>
    </div>
  )
}

export default Form