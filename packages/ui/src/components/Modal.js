import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Transition from 'react-transition-group/Transition';
import Card from './Card';
import utils from '../styles/utils';

const transitionOpacity = {
  entering: 1,
  entered: 1,
  exiting: 0,
  exited: 0
};

const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${themeGet('colors.overlay', 'rgba(0,0,0,0.5)')};
  transition: background 200ms ease-in-out;
`;

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
  transition: opacity 200ms ease-in-out;

  ${utils.is('open')`
    visibility: visible;
    overflow-x: hidden;
    overflow-y: auto;
  `}
`;

const ModalContent = styled(Card)`
  position: relative;
  pointer-events: auto;
  box-shadow: ${themeGet('shadows.5', '0px 5px 25px rgba(0,0,0,0.14)')};
  ${utils.themed('Modal')};
`;

ModalContent.defaultProps = {
  maxWidth: '90%',
  m: 'auto',
  p: '2rem',
  borderRadius: '4px',
  bg: 'white'
};

export default class ModalComponent extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    closeModal: PropTypes.func.isRequired
  }
  static defaultProps = {
    open: false
  };
  constructor(props) {
    super(props);
    if (!this.container && typeof document !== 'undefined') {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);
    }
  }

  componentDidMount() {
    this.attachEventHandlers();
  }

  componentDidUpdate() {
    this.attachEventHandlers();
  }

  onKeyUp({ keyCode }) {
    if (keyCode === 27) {
      this.props.closeModal();
    }
  }

  attachEventHandlers() {
    if (this.props.open) {
      // prevent page from scrolling when modal is opened
      document.body.style.overflow = 'hidden';
      document.addEventListener('keyup', this.onKeyUp);
    } else {
      document.body.style.overflow = null;
      document.removeEventListener('keyup', this.onKeyUp);
    }
  }

  render() {
    const { closeModal, open, children } = this.props;

    if (!this.container) return null;

    return ReactDOM.createPortal(
      <Transition timeout={200} in={open}>
        {state => (
          <Modal open={open || state === 'exiting'} state={state}>
            <Backdrop onClick={closeModal} />
            <ModalContent>{children}</ModalContent>
          </Modal>
        )}
      </Transition>,
      this.container
    );
  }
}
