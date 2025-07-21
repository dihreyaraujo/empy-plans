import React from 'react';

const Input = ({ placeholder, type = 'text', ...props }) => {
  return <input type={type} placeholder={placeholder} {...props} className="input" />;
};

export default Input;