import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const EstacionContext = createContext(null);

const serverURL = "http://127.0.0.1:5000/api/data";

const EstacionContext_Provider = ({children}) => {

    const [time, setTime] = useState(0);
    const [empuje, setEmpuje] = useState([0]);
    const [init, setInit] = useState(false);
    const [serverInit, setServer] = useState(false);

    const fetchData = async()=>{
        try{
            const resonse = await axios.get(serverURL);
            const data = await resonse.data;
            setEmpuje([...data]);
        }catch(error){
            console.log("Error fetching data: ", error.message);
        }
    }

    const postState = async()=>{
        try{
            const isServerInit = await axios.post(serverURL);
            return isServerInit;
        }catch(error){
            console.log("Error posting state to the server: ", error.message);
            return false;
        }
    }

    useEffect(()=>{
        if (init){
            setServer(postState());
        }
    },[init]);


    useEffect(()=>{
        if(init && serverInit){
            const intervalID = setInterval(()=>{
                fetchData();
            },50);
            return ()=> clearInterval(intervalID);
        }
    }, [empuje, init, serverInit]);

    useEffect(()=>{
        if(init && serverInit){
            setTimeout(()=>{
                setTime(time+1);
            },50);//Time 0.05s
        } 
    },[time, init, serverInit]);

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