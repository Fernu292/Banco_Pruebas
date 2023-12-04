import React, {useState} from "react";
import "./Styles/App.scss";

//Layouts
import SideBar from "./Layout/SideBar";
import EmpujeSerial from "./Layout/Empuje-T";

const App = () => {

  
    return ( 
        <div className="App">
            <SideBar />
            <div className="Content">
                <EmpujeSerial />
            </div>
        </div>
    );
}
 
export default App;