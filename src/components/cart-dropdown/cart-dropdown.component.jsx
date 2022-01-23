import React from 'react';

// React router
import { useNavigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// reselect
import { createStructuredSelector } from 'reselect';

// Selector
import { selectCartItems } from '../../redux/cart/cart.selector';

// Components
import { CartItem } from '../cart-item/cart-item.component';
import { CustomButton } from '../custom-button/custom-button.component';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
