import React from 'react';
import './HiveProgram.css';

const HiveProgram = (props) => {
    return (
        <div className="program-modal" >
            <div className="image-container" >
                <img src={props.image} alt="program" className="image" />
            </div>
            <p className="program-title" >Code Wars</p>
        </div>
    )
}

export default HiveProgram
