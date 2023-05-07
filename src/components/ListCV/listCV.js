import React, {useState} from 'react'
import "./listCV.scss"
import {BsPencilSquare} from "react-icons/bs"
import ModalView from './Modal/modalView'
import { Link } from 'react-router-dom'
function ListCV() {
    const [isbutton, showbutton] = useState(false)

  return (
    <div className="listCV">
        <h2>Danh sách mẫu CV xin việc</h2>
        <div className="components">
          
            <div className="component__CV">
                <div className="overlay">
                    <ModalView/>
                    
                    <Link to="/cv/detail">
                        <div className="btn">
                            <BsPencilSquare/>
                            Dùng mẫu
                        </div>
                    </Link>
                    
                </div>
                <img src="https://cdn1.vieclam24h.vn/images/assets/img/cv34-0559BC.png" alt="" />
                <div className="typeCV">
                    Thanh lịch
                </div>
                <div className="colors">
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color blue"/>
                </div>
            </div>

            <div className="component__CV">
                <div className="overlay">
                    <ModalView/>
                    
                    <Link to="/cv/detail">
                        <div className="btn">
                            <BsPencilSquare/>
                            Dùng mẫu
                        </div>
                    </Link>
                    
                </div>
                <img src="https://cdn1.vieclam24h.vn/images/assets/img/cv34-0559BC.png" alt="" />
                <div className="typeCV">
                    Thanh lịch
                </div>
                <div className="colors">
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color blue"/>
                </div>
            </div>

            <div className="component__CV">
                <div className="overlay">
                    <ModalView/>
                    
                    <Link to="/cv/detail">
                        <div className="btn">
                            <BsPencilSquare/>
                            Dùng mẫu
                        </div>
                    </Link>
                    
                </div>
                <img src="https://cdn1.vieclam24h.vn/images/assets/img/cv34-0559BC.png" alt="" />
                <div className="typeCV">
                    Thanh lịch
                </div>
                <div className="colors">
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color blue"/>
                </div>
            </div>

            <div className="component__CV">
                <div className="overlay">
                    <ModalView/>
                    
                    <Link to="/cv/detail">
                        <div className="btn">
                            <BsPencilSquare/>
                            Dùng mẫu
                        </div>
                    </Link>
                    
                </div>
                <img src="https://cdn1.vieclam24h.vn/images/assets/img/cv34-0559BC.png" alt="" />
                <div className="typeCV">
                    Thanh lịch
                </div>
                <div className="colors">
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color red"/>
                    <div className="color green"/>
                    <div className="color blue"/>
                </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default ListCV