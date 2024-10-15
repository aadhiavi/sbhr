import React from 'react';
 
const Overlay = ({ message, onClose }) => {
    return (
        <div className="overlay">
            <div className="overlay-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
 
export default Overlay;
 