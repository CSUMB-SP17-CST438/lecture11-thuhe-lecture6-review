import * as React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'num clicked': 0
        };
    }

    render() {
        return (
            <button>{this.props.text}</button>
        );
    }
}
