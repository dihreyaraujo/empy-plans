import React from 'react';

const Button = ({ label, variant = 'filled', ...props }) => {
  return (
    <button className={`btn-${variant}`} {...props}>
      {label}
    </button>
  );
};

export default Button;