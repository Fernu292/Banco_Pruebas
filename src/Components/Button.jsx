import React from 'react';
import "../Styles/Button.scss";

const Button = ({text, tool=null, argument}) => {
    return (  
        <button 
            className='Button'
            onClick={()=>tool(argument)}
        >
            {text}
        </button>
    );
}
 
export default Button;