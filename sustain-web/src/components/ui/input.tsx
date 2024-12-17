import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border p-2 mb-2 w-full ${className}`}
      {...props}
    />
  );
};

export default Input;
