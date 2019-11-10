import React, { Component } from 'react';

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };
    }

    componentDidMount() {
        if (this.textInput) this.textInput.focus();
    }

    render() {
        return (
            <input type="text"
                   ref={this.setTextInputRef}
            />
        );
    }
}
