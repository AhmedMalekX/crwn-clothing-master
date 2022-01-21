import React from 'react';

// Components
import { CustomButton } from '../custom-button/custom-button.component';

// Styles
import './cart-dropdown.styles.scss';

export const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
