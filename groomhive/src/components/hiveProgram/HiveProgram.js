import React from 'react';
import image from '../../assets/image.png';
import './HiveProgram.css';

const HiveProgram = () => {
    return (
        <div className="program-modal" >
            <div className="image-container" >
                <img src={image} alt="program" className="image" />
            </div>
            <p className="program-title" >Code Wars</p>
        </div>
    )
}

export default HiveProgram
