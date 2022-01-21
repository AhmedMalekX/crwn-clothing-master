// Types
import { CartActionTypes } from './cart.types';

// Utils
import { addItemToCart } from './cart.utils';

const INITAL_STATE = {
  hidden: true,
  cartItem: [],
};

export const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };

    default:
      return state;
  }
};
