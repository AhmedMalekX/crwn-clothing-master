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

// Styles
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
