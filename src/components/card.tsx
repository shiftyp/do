import React from 'react';
import './card.css';

export type CardProps = {
  title: string;
  className?: string;
  buttons?: React.ReactNode;
  onClick?: () => void;
};

export const Card: React.SFC<CardProps> = ({
  title,
  children,
  buttons,
  onClick,
  className = '',
}) => {
  const keyHandler = (e: React.KeyboardEvent) => {
    if (onClick && e.which === 13) {
      onClick();
    }
  };

  return (
    <div className={`card ${className}`}>
      <h2
        tabIndex={onClick ? 1 : undefined}
        className="card__title"
        onClick={onClick}
        onKeyPress={keyHandler}
      >
        {title}
      </h2>
      <div
        tabIndex={onClick ? 1 : undefined}
        className="card__body"
        onClick={onClick}
        onKeyPress={keyHandler}
      >
        {children}
      </div>
      <div className="card__button-bar">{buttons}</div>
    </div>
  );
};
