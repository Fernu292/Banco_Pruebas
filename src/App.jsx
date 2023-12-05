import React, {useState} from "react";
import "./Styles/App.scss";
import "./Styles/Button.scss";

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