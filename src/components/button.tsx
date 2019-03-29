import React from 'react';

import "./button.css";

export type ButtonProps = {
  label: string;
  color: 'purple' | 'blue' | 'green' | 'red' | 'white';
  action: () => void;
};

export const Button: React.SFC<ButtonProps> = ({ label, color, action }) => (
  <button
    className={`button button-${color}`}
    aria-label={label}
    onClick={action}
    type="button"
  >
    {label}
  </button>
);
