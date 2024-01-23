import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = ({
  className,
  style,
  header,
  headerClass,
  contentClass,
  onSubmit,
  footer,
  footerClass,
  children,
}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form
        onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}
      ></form>
      <div className={`modal__content ${contentClass}`}>{children}</div>
      <footer className={`modal__content ${footerClass}`}>{footer}</footer>
    </div>
  );
  return createPortal(content, document.getElementById("modal-hook"));
};
const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props}/>
      </CSSTransition>
    </>
  );
};

export default Modal;
