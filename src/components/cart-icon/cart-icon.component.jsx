import React from 'react';

// Redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// reselect
import { createStructuredSelector } from 'reselect';

// Selector
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

// Logo
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// Styles
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> {itemCount} </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
