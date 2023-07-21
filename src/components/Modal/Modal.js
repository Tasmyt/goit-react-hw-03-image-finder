import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {

componentDidMount() {
    window.addEventListener('keydown', this.keyDown); 
  }
componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown)
}
  keyDown = e => {    
    if (e.code === 'Escape') {
      this.props.closeModal(); 
    }
  };

    backdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
        }
    }
render()
{
    return createPortal(<Overlay onClick={this.backdropClick}>
            <ModalDiv >
                {this.props.children}
            </ModalDiv>
        </Overlay>, modalRoot);
}
}

Modal.protoTypes = {
  onClick: PropTypes.func,
  closeModal: PropTypes.func,
  children: PropTypes.node.isRequired,
}