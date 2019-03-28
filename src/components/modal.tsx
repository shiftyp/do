import React from 'react';

import "./modal.css";

export type ModalProps = {
  open: boolean;
  title: string;
}

export const Modal: React.SFC<ModalProps> = ({ children, open, title }) => (
  <div className={`modal ${open ? 'open' : ''}`}>
    <h2 className="modal__title">{title}</h2>
    <div className="modal__body">
      {children}
    </div>
  </div>
);