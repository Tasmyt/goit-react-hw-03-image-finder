import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

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

    BackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
        }
    }
render()
{
    return createPortal(<Overlay onClick={this.BackdropClick}>
            <ModalDiv >
                {this.props.children}
            </ModalDiv>
        </Overlay>, modalRoot);
}
}