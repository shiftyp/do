import React from 'react';

import "./modal.css";

export type ModalProps = {
  open: boolean;
  title: string;
}

export const Modal: React.SFC<ModalProps> = ({ children, open, title }) => (
  <div className={`modal ${open ? 'open' : ''}`}>
    <div className="modal__background" />
    <div className="modal__window">
      <h2 className="modal__title">{title}</h2>
      <div className="modal__body">
        {children}
      </div>
    </div>
  </div>
);