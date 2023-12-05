import React from 'react';
import "../Styles/Button.scss";

const Button = ({text, onClickAction, value}) => {


    return (  
        <button 
            className='Button'
            onClick={onClickAction(value)}
        >
            {text}
        </button>
    );
}
 
export default Button;