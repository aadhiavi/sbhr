import React from 'react'
import './SBHRCompo.css';
import { FaTimes } from 'react-icons/fa';

const ModelVideo = ({handleClickModelVideo,Srcvdo}) => {

    return (
        <div className='overlayvideo'>
            <div className="modelvideo">
                <div className="crossvideo">
                    <FaTimes style={{ color: "white" }} size={25} onClick={handleClickModelVideo} />
                </div>
                <video controls src={Srcvdo} autoPlay></video>
            </div>
        </div>

    )
}

export default ModelVideo