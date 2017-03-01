import * as React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'num clicked': 3
        };

        this.doStuffOnClick = this.doStuffOnClick.bind(this);
    }

    doStuffOnClick(event) {
        let random_number = 100 * Math.random();
        this.setState({
            'num clicked': random_number,
        });
    }

    render() {
        return (
            <button onClick={this.doStuffOnClick}>{this.props.text}: Clicked {this.state['num clicked']} times!</button>
        );
    }
}
