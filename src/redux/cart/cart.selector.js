import { createSelector } from 'reselect';

// input selector [dosen't use create selector] -- it's a function gets the all state and return slice from it (the part that we need)
const selectCart = (state) => state.cart;

// output selector [use input selector and create selector]
export const selectCartItems = createSelector(
  [selectCart], // array of input selector or result of output selector
  // function return the value we want out of this selector (param) param is each out put of input selector must be in the order
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
      0
    )
);
