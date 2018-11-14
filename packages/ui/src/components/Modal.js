import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import is from 'styled-is'
import { transitions } from 'polished'
import Transition from 'react-transition-group/Transition'
import utils from '../styles/utils'

const transitionOpacity = {
    entering: 1,
    entered: 1,
    exiting: 0,
    exited: 0
}

const Backdrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: ${themeGet('colors.overlay')};
    ${transitions(
        'background-color',
        `200ms ease-in-out`
    )}
`

const Modal = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    visibility: hidden;
    overflow: hidden;
    outline: 0;
    display: flex;
    align-items: center;
    opacity: ${p => transitionOpacity[p.state]};

    ${is('open')`
        visibility: visible;
        overflow-x: hidden;
        overflow-y: auto;
    `}

    ${transitions(
        'opacity',
        `200ms ease-in-out`
    )}
`

const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
    pointer-events: auto;
    background-color: white;
    box-shadow: ${themeGet('shadows.5')};
    ${utils.themed('Modal')};
`

export default class ModalComponent extends Component {
    constructor(props) {
        super(props)
        if (!this.container && typeof document !== 'undefined') {
            this.container = document.createElement('div')
            document.body.appendChild(this.container)
        }
    }
    componentDidMount() {
        this.attachEventHandlers()
    }
    componentDidUpdate() {
        this.attachEventHandlers()
    }
    attachEventHandlers() {
        if (this.props.open) {
            // prevent page from scrolling when modal is opened
            document.body.style.overflow = 'hidden'
            document.addEventListener('keyup', this.onKeyUp)
        } else {
            document.body.style.overflow = null
            document.removeEventListener('keyup', this.onKeyUp)
        }
    }
    onKeyUp = ({ keyCode }) => {
        if (keyCode === 27) {
            this.props.onClose()
        }
    }
    render() {
        const {
            onClose,
            open,
            children
        } = this.props

        if (!this.container) return null

        return createPortal(
            <Transition
                timeout={200}
                in={open}
            >
                {state => (
                    <Modal
                        open={open || state === 'exiting'}
                        state={state}
                    >
                        <Backdrop onClick={onClose} />
                        <ModalContent>
                            {children}
                        </ModalContent>
                    </Modal>
                )}
            </Transition>,
            this.container
        )
    }
}

Modal.propTypes /* remove-proptypes */ = {
    open: PropTypes.bool,
    onClose: PropTypes.func
}

Modal.defaultProps = {
    open: false
}