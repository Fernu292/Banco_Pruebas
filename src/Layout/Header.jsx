import React, {useContext, useEffect, useState} from 'react';
import { EstacionContext } from '../Context/EstacionContext';
import "../Styles/Header.scss";


const Header = () => {

    const {time} = useContext(EstacionContext);

    return (  
        <div className='Header'>
            <div className="Title">
                <h1>Antares Banco de Pruebas</h1>
            </div>

            <div className="Counter" id="counter">
                {time/100}
            </div>
        </div>
    );
}
 
export default Header;