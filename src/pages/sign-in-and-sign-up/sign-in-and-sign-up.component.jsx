import React from 'react';

// Components
import { SignIn } from '../../components/sign-in/sign-in.component';
import { SingUp } from '../../components/sign-up/sign-up.component';

// Styles
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

export const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SingUp />
  </SignInAndSignUpContainer>
);
