import React from 'react'
import Admin from './Admin';
import { MdClose } from 'react-icons/md';

const Model = ({ handleClickModel }) => {

    return (
        <div className='overlay-model'>
            <div className="model-model">
                <div className="cross-model">
                    <MdClose style={{ color: "white" }} size={25} onClick={handleClickModel} />
                </div>
                <Admin />
            </div>
        </div>
    )
}

export default Model