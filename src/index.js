import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function sum(a, b){
    return a + b;
}

function firstJSX(){
    return(
        <div>
            Second Test
        </div>
    )
}

const App = () => {
    return(
        <div className="App">
            Hello World
            {firstJSX()}
            <h1>Soma de (2 + 5): {sum(2, 5)}</h1>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);