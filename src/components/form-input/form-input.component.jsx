import React from 'react';

// Styles
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

export const FormInput = ({ handleChange, label, ...otherInputProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherInputProps} />
    {label ? (
      <FormInputLabel className={otherInputProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);
