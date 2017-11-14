import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Colored from './Colored';

class App extends Component {

    //The Constructor allows us to have a component internal state
    constructor(props) {
        super(props);
        //In ReactJS a state is always an object
        this.state = {
            color: '',
            newColor: ''
        };
    }

    changeColor = function(){
        this.setState({color: this.state.newColor});
    }

    render() {
        return (
            <div className="App">
                <div className="app-title">Color Chooser</div>                
                <Colored
                    selColor={this.state.color} />
                <Form inline>
                    <FormControl
                        placeholder="Choose a Color"
                        className="colpicker-input"
                        onChange={event => this.setState({newColor: event.target.value})}
                    />
                    <Button
                      onClick={() => this.changeColor()}
                    >Select</Button>
                </Form>
            </div>
        )
    }

}

export default App;