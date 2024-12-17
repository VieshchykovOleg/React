import React from 'react';

const Popup = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <p>{message}</p>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
};

export default Popup;
