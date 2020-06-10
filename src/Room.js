import React, { useState } from 'react';
import './Room.css'

function App() {
    let [isLit, setLit] = useState(true);
    let [isTemp, setTemp] = useState(72)

  return (
    <div className={`room ${isLit? "lit": "dark"}`}>
        <h1>Basic React App</h1>
        <h2>Assignment #04</h2>
        <h3>Submitted By Emmad Raheem</h3>
        This Room Light is {isLit? "ON":"OFF"}
        <br />
        <button onClick={ () => setLit(isLit=true)}> Turn on </button>
        <button onClick={ () => setLit(isLit=false)}> Turn off</button>
        <br />
        <br />
        <br />
        The Room Temperature is {isTemp} Fahrenheit
        <br />
        <button onClick={ () => setTemp(++isTemp)}> + </button>
        <button onClick={ () => setTemp(--isTemp)}> - </button>
    </div>

  );
}

export default App;
