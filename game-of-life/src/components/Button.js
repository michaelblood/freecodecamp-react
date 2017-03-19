import React, { PropTypes } from 'react';

const Button = ({ onClick, disabled, text }) => (
  <button
    className={"button " + text}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
