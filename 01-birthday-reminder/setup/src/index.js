import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <main>
            <h1 className="title">Birthday Reminder</h1>
            <App />
        </main>
    </React.StrictMode>,
    document.getElementById("root")
);
