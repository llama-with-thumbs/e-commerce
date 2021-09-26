import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, className, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${className} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
