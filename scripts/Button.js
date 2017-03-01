import * as React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'num clicked': 3
        };
    }

    doStuffOnClick(event) {
        console.log('I\'m working');
    }

    render() {
        return (
            <button onClick={this.doStuffOnClick}>{this.props.text}: Clicked {this.state['num clicked']} times!</button>
        );
    }
}
