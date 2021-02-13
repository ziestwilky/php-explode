import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        h1 > wilky code < /h1> <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > <
        /div>
    );
}
export default App;

function velocity(distance, time) {
   

    var  result = distance / time;
    alert(result);


}
