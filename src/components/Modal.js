import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
    onKeyUp = ({ keyCode }) => {
        if (keyCode === 27) {
            this.this.props.onClose()
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}