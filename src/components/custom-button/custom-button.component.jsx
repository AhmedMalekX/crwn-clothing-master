import React from 'react';

// Styles
import './custom-button.styles.scss';

// Styled Components
import { CustomButtonContainer } from './custom-button.styles';

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
