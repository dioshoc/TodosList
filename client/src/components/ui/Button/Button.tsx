import React from 'react';

type Props = {
  children?: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  tabIndex?: number;
  type?: 'button' | 'submit';
  variant?: 'default' | 'text';
};

const classes = {
  button: {
    default:
      'rounded-2xl bg-blue-500 px-4 py-2 text-2xl text-white outline-1 transition-all ' +
      'hover:bg-blue-400 ' +
      'active:bg-blue-700 ' +
      'disabled:bg-gray-500 disabled:text-gray-700 disabled:cursor-default',
    text: 'disabled:bg-gray-500 disabled:text-gray-700 disabled:cursor-default',
  },
};

const Button = ({
  children = '',
  className,
  disabled = false,
  onClick,
  type = 'button',
  variant = 'default',
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classes.button[variant] + ' ' + className}>
      {children}
    </button>
  );
};

export default Button;
