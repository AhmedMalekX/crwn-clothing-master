import React from 'react';

// Styles
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export const WithSpinner =
  WrapperComponent =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
