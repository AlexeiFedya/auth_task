import React from 'react';
import './pop-up.scss'


export const PopUp = ({popUpHandleClick, ifError}) => {
    return (
        <div  className={`popup${ifError ? " popupOpen" : ""}`}>
            <div className="popup_content">
                <div className="popup-header">
                    <h2>Warning!</h2>
                    <button 
                        className="close"
                        onClick={popUpHandleClick}>&times;</button>
                </div>
                <div className="popup-body">
                    <p>{ifError}</p>
                </div>
            </div>
        </div>
    )
}
