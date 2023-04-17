import React from "react";
import "./cv2.scss";
import avatar2 from './avatar2.jpg'

function Contentcv2(){
    return(
        <div>
          <div class="resume-wrapper">
            <section class="profile section-padding">
                <div class="container2">
                <div class="picture-resume-wrapper">
                    <div class="picture-resume">
                    <span><img src={avatar2} alt=""></img></span>
                </div>
                    <div class="clearfix"></div>
            </div>
                <div class="name-wrapper">
                    <h1>Nguyen<br/>Thanh Lich</h1>
                </div>
                <div class="clearfix"></div>
                <div class="contact-info clearfix">
                    <ul class="list-titles">
                    <li>Call</li>
                    <li>Mail</li>
                    <li>Web</li>
                    <li>Home</li>
                    </ul>
                    <ul class="list-content ">
                    <li>+0 123 456 789</li>
                    <li>abc@gmail.com</li> 
                    <li><a href="#">123.com</a></li> 
                    <li>Da Lat, VN</li> 
                    </ul>
                </div>
                <div class="contact-presentation"> 
                    <p><span class="bold"></span> Là người ham học hỏi, không ngại cống hiến. Có kiến thức chuyên ngành Công Nghệ Thông Tin.  Không ngừng học tập, tích lũy kiến thức, nâng cao năng lực trong mọi lĩnh vực được tham gia. </p>
                </div>
                <div class="contact-social clearfix">
                    <ul class="list-titles">
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    </ul>
                    <ul class="list-content"> 
                    <li><a href="">@thanhlich</a></li> 
                    <li><a href="">thanhlich</a></li>
                    <li><a href="">thanhlich</a></li>
                    </ul>
                </div>
                </div>
            </section>
            
            <section class="experience section-padding">
                <div class="container22">
                <h3 class="experience-title">Kinh nghiệm</h3>
                
                <div class="experience-wrapper">
                    <div class="company-wrapper clearfix">
                    <div class="experience-title">Tên cty</div> 
                    <div class="time">Nov 2012 - Present</div> 
                    </div>
                    
                    <div class="job-wrapper clearfix">
                    <div class="experience-title">Front End Developer </div> 
                    <div class="company-description">
                        <p>mô tả công việc</p> 
                    </div>
                    </div>
                    
                    <div class="company-wrapper clearfix">
                    <div class="experience-title">Tên cty</div>
                    <div class="time">Nov 2010 - Present</div> 
                    </div>
                    
                    <div class="job-wrapper clearfix">
                    <div class="experience-title">Freelance, Web Designer / Web Developer</div> 
                    <div class="company-description">
                        <p>mô tả công việc</p> 
                    </div>
                    </div>
                    
                    <div class="company-wrapper clearfix">
                    <div class="experience-title">Tên cty</div> 
                    <div class="time">Nov 2009 - Nov 2010</div>
                    </div> 
                    
                    <div class="job-wrapper clearfix">
                    <div class="experience-title">Web Designer </div> 
                    <div class="company-description">
                        <p>mô tả công việc</p> 
                    </div>
                    </div>
                    
                </div>
                
                <div class="section-wrapper clearfix">
                    <h3 class="section-title">Kỹ Năng</h3> 
                    <ul>
                        <li class="skill-percentage">HTML / HTML5</li>
                        <li class="skill-percentage">CSS / CSS3 / SASS / LESS</li>
                        <li class="skill-percentage">Javascript</li>
                        <li class="skill-percentage">Jquery</li>
                        <li class="skill-percentage">Wordpress</li>
                        <li class="skill-percentage">Photoshop</li>
                        
                    </ul>
                    
                </div>
                
                <div class="section-wrapper clearfix">
                    <h3 class="section-title">Sở thích</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p> 
                </div>
                
                </div>
            </section>
            
            <div class="clearfix"></div>
            </div>
        </div>
    )
}


export default Contentcv2;