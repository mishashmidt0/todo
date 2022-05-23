import React from 'react';

import './App.css';
import {Header} from "./components/header";
import {TimeBlock} from "./components/TimeBlock";
import {Tasks} from "./components/Tasks";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="section-wrapper">
                    <TimeBlock/>
                    <Tasks/>
                </div>
            </div>
        </div>
    );
}

export default App;
