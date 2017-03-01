import * as React from 'react';

import { Heading2 } from './Heading';
import { Button } from './Button';

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <Heading2 title="I'm a second banana" />
                <Button text="Hi from Content.js!" />
            </div>
        );
    }
}
