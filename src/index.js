import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./style.css";

function sum(a, b){
    return a + b;
}

function alertMe(){
    alert('Alert!');
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
            {element}
            {element2}
            <Button onClick={ () => {alertMe()}}  name='Standard Button'/>
            <ComponentA>
                <ComponentB>
                    <br/>Test
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const element = 'Text For Test';
const element2 = <h2>Title in H2 for Test</h2>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);