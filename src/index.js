import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import EstacionContext_Provider from "./Context/EstacionContext.jsx";

const div = document.getElementById("root");

render(
    <EstacionContext_Provider>
        <App />
    </EstacionContext_Provider>
, div);