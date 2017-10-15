import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Calculator from "./components/Calculator.js";


    class App extends Component {
        render() {
            return (
                <div className="App">
                    <BrowserRouter>
                        <Calculator/>
                    </BrowserRouter>
                </div>
            );
        }
    }

    export default App;
