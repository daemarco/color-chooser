import React, { Component } from 'react';
import './Colored.css';

class Colored extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedColor: ''
        }
    }

    componentDidMount() {
        this.setState({ selectedColor: 'Black' });
    }

    componentWillReceiveProps(props) {
        this.setState({ selectedColor: props.selColor });
    }

    render() {
        return (<div className="selected-color" style={{color: this.state.selectedColor}}>Your favourite Color is: {this.state.selectedColor}</div>)
    }

}

export default Colored;