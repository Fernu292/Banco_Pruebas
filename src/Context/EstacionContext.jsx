import React, { useContext } from 'react';
import { createContext, useState, useEffect } from 'react';

export const EstacionContext = createContext(null);

const EstacionContext_Provider = ({children}) => {

    const [time, setTime] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time+1);
        },1000);//Time 1s 
    });


    return (
        <EstacionContext.Provider
            value={{
                time, 
                setTime
            }}
        >
            {children}
        </EstacionContext.Provider>
    )
};

export default EstacionContext_Provider;