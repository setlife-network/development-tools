import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div
                className={'Button' + this.props.className}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </div>
        )
    }
}

Button.defaultProps = {
    className: ''
}
