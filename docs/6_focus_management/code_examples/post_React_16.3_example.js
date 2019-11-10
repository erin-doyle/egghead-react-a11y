import React, { Component } from 'react';

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        if (this.textInput.current)
            this.textInput.current.focus();
    }

    render() {
        return (
            <input type="text" ref={this.textInput} />
        );
    }
}
