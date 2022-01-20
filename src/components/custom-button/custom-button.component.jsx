import React from 'react';

// Styles
import './custom-button.styles.scss';

export const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherButtonProps
}) => (
  <button
    className={` ${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
    {...otherButtonProps}>
    {children}
  </button>
);
