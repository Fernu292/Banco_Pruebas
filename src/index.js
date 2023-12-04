import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import EstacionContext_Provider from "./Context/EstacionContext.jsx";

const div = document.getElementById("root");

const root = createRoot(div);

root.render(
    <EstacionContext_Provider>
        <App />
    </EstacionContext_Provider>
    );