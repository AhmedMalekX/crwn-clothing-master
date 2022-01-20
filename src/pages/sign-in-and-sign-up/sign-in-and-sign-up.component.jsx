import React from 'react';

// Components
import { SignIn } from '../../components/sign-in/sign-in.component';
import { SingUp } from '../../components/sign-up/sign-up.component';

// Styles
import './sign-in-and-sign-up.styles.scss';

export const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SingUp />
  </div>
);
