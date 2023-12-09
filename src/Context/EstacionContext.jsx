import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const EstacionContext = createContext(null);

const serverURL = "http://127.0.0.1:5000/api/data";

const EstacionContext_Provider = ({children}) => {

    const [time, setTime] = useState(0);
    const [times, setTimes] = useState([0]);
    const [empuje, setEmpuje] = useState([0]);
    const [init, setInit] = useState(false);
    const [serverInit, setServer] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [isSave, setSave] = useState(false);

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

    const cleanData = async()=>{
        try{
            const clearData = await axios.post(`${serverURL}/restart`);
            const data = await clearData.data;
            setEmpuje([...data]);
        }catch(error) {
            console.log("Error restarting data to the server: ", error.message);
            return 1;
        }
    }

    /*
    const saveData = async ()=>{
        try {
            const saveDataState = await axios.post(`${serverURL}/save_data`);
        }
    }
    */

    useEffect(()=>{
        if (init){
            setServer(postState());
            if(clicks==1){
                const timeOutClean = setTimeout(()=>{
                    cleanData();
                },50);
                return ()=> clearTimeout(timeOutClean);
            }
        }
    },[init, clicks]);


    useEffect(()=>{
        if(init && serverInit){
            const intervalID = setInterval(()=>{
                fetchData();              
                setTime((before)=>before+1);
                setTimes([...times, time]);
            },7);
            return ()=> clearInterval(intervalID);
        }
    }, [init, serverInit, time]);

    return (
        <EstacionContext.Provider
            value={{
                time,
                setTime,
                times,
                setTimes,
                empuje,
                setEmpuje,
                init, 
                setInit,
                clicks,
                setClicks,
                isSave,
                setSave
            }}
        >
            {children}
        </EstacionContext.Provider>
    )
};

export default EstacionContext_Provider;