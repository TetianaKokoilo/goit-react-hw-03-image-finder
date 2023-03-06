import { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledOverlay, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.hadleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.hadleKeyDown);
  }

  hadleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

    render() {
    return createPortal(
      <StyledOverlay onClick={this.handleBackdropClick}>
            <StyledModal>{this.props.children}</StyledModal>
      </StyledOverlay>,
      modalRoot
    );
  }
}
