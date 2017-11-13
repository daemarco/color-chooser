import React, { Component } from 'react';
import './ColorPicker.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class ColorPicker extends Component {

    render() {
        return (
            <div className="color-picker">
                <Form inline>
                    <FormControl
                        placeholder="Choose a Color"
                        className="colpicker-input"
                    />
                    <Button>Select</Button>
                </Form>
            </div>)
    }

}

export default ColorPicker;