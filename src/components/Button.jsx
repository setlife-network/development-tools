import React from 'react';

import Base from './Base';

export default class Button extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className={'Button' + this.props.className}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </div>
        );
    }
}

Button.defaultProps = {
    className: ''
};