import React from 'react';

import "./button.css";

export type ButtonProps = {
  label: string;
  color: 'purple' | 'blue' | 'green';
  action: () => void;
};

export const Button: React.SFC<ButtonProps> = ({ label, color, action }) => (
  <button
    className={`button button-${color}`}
    aria-label={label}
    onClick={action}
  >
    {label}
  </button>
);
