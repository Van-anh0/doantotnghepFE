import React from "react";
import "./insContainer.scss";
import icon from '../../Asset/icon_ins.png'
import { Link } from 'react-router-dom';
import IMG from "../DocPage/image/image5.jpg";
function InsContainer() {
    return(
        <div>
            <div id="ins-container" className="hidden-xs">
                <div id="bell-message" className="bell-message" role="button">
                    <div id="tool-tip" className="tool-tip">
                    <Link to='/cv/doc/doc1' >
                    <p className="p1"><strong>Về CV Online</strong></p>
                    <img src={IMG}></img>
                    <p className="p2">Tìm hiểu thêm về tạo CV online</p>
                    </Link>
                    </div>
                    <img className="img" src={icon} alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default InsContainer;