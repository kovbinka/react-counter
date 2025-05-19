import React from 'react';
import '../index.css';

const Button = ({ title, emoji, onClick }) => {
  return (
    <button onClick={onClick}>
      {title}{emoji}
    </button>
  );
};

export default Button;