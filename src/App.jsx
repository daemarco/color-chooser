import React, { Component } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

class App extends Component {

    //The Constructor allows us to have a component internal state
    constructor(props) {
        super(props);
        //In ReactJS a state is always an object
        this.state = {
            color: ''
        };
    }

    render() {
        return (
            <div className="App">
                <div className="app-title">Color Chooser</div>
                <div className="selected-color">Your favourite Color is: {this.state.color}</div>
                <ColorPicker />
            </div>
        )
    }

}

export default App;