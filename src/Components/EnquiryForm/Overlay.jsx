import React from 'react';
import './Admin.css';
import { MdClose } from 'react-icons/md';

const Overlay = ({ message, onClose }) => {
    return (
        <div className="overlay-enquiry">
            <div className="overlay-content-msg">
                <p>{message}</p>
                <div className='close'><MdClose style={{ color: "white" }} size={25} onClick={onClose} /></div>
            </div>
        </div>
    );
};

export default Overlay;