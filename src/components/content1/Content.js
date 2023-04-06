import React from "react";
import "./mau.css"
import {BsFillPhoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import{TbWorldWww} from"react-icons/tb"
import{FaMapMarkerAlt} from"react-icons/fa"
import{AiOutlineFacebook} from"react-icons/ai"
import{AiFillTwitterSquare} from"react-icons/ai"
import{AiFillYoutube} from"react-icons/ai"
import{BsLinkedin} from"react-icons/bs"
import{ImBook}from"react-icons/im"
import{GiGamepad}from"react-icons/gi"
import{BsMusicNoteBeamed} from"react-icons/bs"
import{MdVolunteerActivism} from"react-icons/md"


function Content() {

    return(
      <div className="resume">
        <div className="resume_left">

          <div className="resume_profile">
            <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic"/>
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">nguyễn minh châu</p>
                <p className="regular">Designer</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <FaMapMarkerAlt/>
                  </div>
                  <div className="data">
                    21 Lê Lợi, Quận 4 <br /> TP.HCM
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <BsFillPhoneFill/>
                  </div>
                  <div className="data">
                    +324 4445678
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <AiOutlineMail/>
                  </div>
                  <div className="data">
                    minhchau@gmail.com
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <TbWorldWww/>
                  </div>
                  <div className="data">
                    www.minhchau.com
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skill's</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">
                    HTML
                  </div>
                  <div className="skill_progress">
                    <span></span>
                  </div>
                  <div className="skill_per">80%</div>
                </li>
                <li>
                  <div className="skill_name">
                    CSS
                  </div>
                  <div className="skill_progress">
                    <span></span>
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">
                    SASS
                  </div>
                  <div className="skill_progress">
                    <span></span>
                  </div>
                  <div className="skill_per">90%</div>
                </li>
                <li>
                  <div className="skill_name">
                    JS
                  </div>
                  <div className="skill_progress">
                    <span></span>
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">
                    JQUERY
                  </div>
                  <div className="skill_progress">
                    <span></span>
                  </div>
                  <div className="skill_per">88%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <AiOutlineFacebook/>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Facebook</p>
                    <p>MinhChau@facebook</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <AiFillTwitterSquare/>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Twitter</p>
                    <p>MinhChau@twitter</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <AiFillYoutube/>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Youtube</p>
                    <p>MinhChau@youtube</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <BsLinkedin/>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>MinhChau@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
       </div>

       <div className="resume_right">
         <div className="resume_item resume_about">
             <div className="title">
                <p className="bold">About us</p>
              </div>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
         </div>
         <div className="resume_item resume_work">
             <div className="title">
                <p className="bold">KINH NGHIỆM LÀM VIỆC</p>
              </div>
             <ul>
                 <li>
                     <div className="date">2013 - 2015</div> 
                     <div className="info">
                          <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
                 <li>
                   <div className="date">2015 - 2017</div>
                   <div className="info">
                          <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
                 <li>
                   <div className="date">2017 - Present</div>
                   <div className="info">
                          <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
             </ul>
         </div>
         <div className="resume_item resume_education">
           <div className="title">
                <p className="bold">Education</p>
              </div>
           <ul>
                 <li>
                     <div className="date">2010 - 2013</div> 
                     <div className="info">
                          <p className="semi-bold">Web Designing (Texas University)</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
                 <li>
                   <div className="date">2000 - 2010</div>
                   <div className="info">
                          <p className="semi-bold">Texas International School</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
             </ul>
         </div>
         <div className="resume_item resume_hobby">
           <div className="title">
                <p className="bold">SỞ THÍCH</p>
              </div>
            <ul>
              <li><i className="icons"><ImBook/></i></li>
              <li><i className="icons"><GiGamepad/></i></li>
              <li><i className="icons"><BsMusicNoteBeamed/></i></li>
              <li><i className="icons"><MdVolunteerActivism/></i></li>
           </ul>
         </div>
       </div>
     </div>

    

    )
    }

export default Content;