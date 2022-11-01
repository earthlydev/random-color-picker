import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <button
            class={ this.props.light ? 'light-button' : 'dark-button'}
            onClick={ this.props.onClick }>
                Click Me!
            </button>
        )
    }
}