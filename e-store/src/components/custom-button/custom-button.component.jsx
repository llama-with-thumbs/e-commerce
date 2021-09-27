import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''}${
        isGoogleSignIn ? 'google-sign-in' : ''
      } ${className} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
