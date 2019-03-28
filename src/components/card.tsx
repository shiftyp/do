import React from 'react';
import './card.css';

export type CardProps = {
  title: string;
  className?: string;
  buttons?: React.ReactNode;
};

export const Card: React.SFC<CardProps> = ({
  title,
  children,
  buttons,
  className = '',
}) => {
  return (
    <div className={`card ${className}`}>
      <h2 className="card__title">{title}</h2>
      {children && <div className="card__body">{children}</div>}
      {buttons && <div className="card__button-bar">{buttons}</div>}
    </div>
  );
};
