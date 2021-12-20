import React from 'react'
import './Modal.css'

function Modal({ className, visible, children }) {
  return (
    <>
    <div className = "ModalOverlay"></div>
    <div className = "ModalWrapper"></div>
    <div className = "ModalInner"></div>
    <div className = "ModalWrapper"></div>
      {/* <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
        </ModalInner>
      </ModalWrapper> */}
    </>
  )
}


export default Modal;