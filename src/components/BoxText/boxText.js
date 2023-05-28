import React from "react";
import "./boxText.scss";
function BoxText() {
    //hello thanhlich day ne

    return(
        <div>
        <div className="box-text">
            <h2>{window.lang['home.boxtext.title']}</h2>
            <ul>
                <li>{window.lang['home.boxtext.step1']}</li>
                <li>{window.lang['home.boxtext.step2']}</li>
                <li>{window.lang['home.boxtext.step3']}</li>
            </ul>
        </div>
            <div className="box-text">
            <h2>{window.lang['home.boxtext.why']}</h2>
            <ul>
                <li>{window.lang['home.boxtext.detail1']}</li>
                <li>{window.lang['home.boxtext.detail2']}</li>
                <li>{window.lang['home.boxtext.detail3']}</li>
                <li>{window.lang['home.boxtext.detail4']}</li>
            </ul>
        </div>
    </div>
    )
}
export default BoxText;