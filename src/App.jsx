import React, {useState} from "react";
import "./Styles/App.scss";
import data_serial from "../server/Data/datos_serial.json";

//Layouts
import SideBar from "./Layout/SideBar";
import EmpujeSerial from "./Layout/Empuje-T";
import Header from "./Layout/Header";

const App = () => {

    return ( 
        <div className="App">
            <SideBar />
            <div className="Content">
                <Header />
                <EmpujeSerial />
            </div>
        </div>
    );
}
 
export default App;