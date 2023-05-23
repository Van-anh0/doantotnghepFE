import React from "react";
import "./insContainer.scss";
import icon from '../../Asset/icon_ins.png'
import { Link } from 'react-router-dom';
function InsContainer() {
    return(
        <div>
            <div id="ins-container" className="hidden-xs">
                <div id="bell-message" className="bell-message" role="button">
                    <div id="tool-tip" className="tool-tip">
                    <Link to='' >
                    <p className="p1"><strong>Về CV Online</strong></p>
                    <a></a>
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