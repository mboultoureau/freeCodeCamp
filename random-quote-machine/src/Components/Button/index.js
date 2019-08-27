import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <div className='Button' onClick={props.handleClick}>
            {props.text}
        </div>
    );
}

export default Button;