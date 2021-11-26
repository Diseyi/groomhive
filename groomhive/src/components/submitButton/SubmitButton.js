import React from 'react';
import './SubmitButton.css'

const SubmitButton = (props) => {
    return (
        <div>
             <button className="button" id={props.id} >{props.value}</button>
        </div>
    )
}

export default SubmitButton
