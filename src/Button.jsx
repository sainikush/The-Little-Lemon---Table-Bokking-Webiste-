import React from 'react';
import { theme, cn } from './utils';

const Button = ({ children, className, ...props }) => (
  <button
    className={cn(
      'px-6 py-3 text-lg font-bold text-black shadow-md transition-transform duration-200 hover:scale-105 active:scale-95',
      className
    )}
    style={{
      backgroundColor: theme.colors.primaryYellow,
      borderRadius: theme.rounded,
      fontFamily: theme.fonts.body,
    }}
    {...props}
  >
    {children}
  </button>
);

export default Button;
