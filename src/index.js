// const sayHelloManyTimes = (times) =>
//   new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

// const helloDiv = document.createElement("div");
// helloDiv.innerHTML = sayHelloManyTimes(10).join("<br/>");
// document.body.append(helloDiv);

// index.js
import './style.css';
import React from "react-dom";
import ReactDOM from 'react-dom/client';
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)