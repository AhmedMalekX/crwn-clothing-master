import React from 'react';

// Styles
import './custom-button.styles.scss';

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherButtonProps
}) => (
  <button
    className={` ${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    }  custom-button`}
    {...otherButtonProps}>
    {children}
  </button>
);
