import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const EstacionContext = createContext(null);

const serverURL = "http://127.0.0.1:5000/api/data";

const EstacionContext_Provider = ({children}) => {

    const [time, setTime] = useState(0);
    const [empuje, setEmpuje] = useState([]);
    const [init, setInit] = useState(false);

    const fetchData = async()=>{
        const resonse = await axios.get(serverURL);
        const data = await resonse.data;
        setEmpuje([...data]);
    }

    if(init){
       console.log(init);
    }

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            fetchData();
        },50);
        return ()=> clearInterval(intervalID);
    }, [empuje]);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time+1);
        },50);//Time 0.05s 
    },[time]);

    return (
        <EstacionContext.Provider
            value={{
                time,
                setTime,
                empuje,
                setEmpuje,
                init, 
                setInit
            }}
        >
            {children}
        </EstacionContext.Provider>
    )
};

export default EstacionContext_Provider;