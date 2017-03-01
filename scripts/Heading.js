import * as React from 'react';

export class Heading2 extends React.Component {
    render() {
                // {this.props.title}
        return (

            <div>
                {this.props['title']}
            </div>
        );
    }
}
