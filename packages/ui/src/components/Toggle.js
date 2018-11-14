import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggled: false
        }

        this.onToggle = this.onToggle.bind(this)
    }
    // onToggle = value => {
    onToggle(value) {
        this.setState(
            prevState => ({
                toggled: typeof value === 'boolean' ? value : !prevState.toggled
            }),
            () => {
                if (this.props.onToggle) {
                    this.props.onToggle(this.state.toggle)
                }
            }
        )
    }
    render() {
        return this.props.children({
            toggled: this.state.toggled,
            onToggle: this.onToggle
        })
    }
}

Toggle.propTypes /* remove-proptypes */ = {
    children: PropTypes.func.isRequired,
    onToggle: PropTypes.func
}