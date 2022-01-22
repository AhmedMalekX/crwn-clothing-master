import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { directoryReducer } from './directory/directory.reducer';
import { shopReducer } from './shop/shop.reducer';

const persistConfig = {
  // persist configration
  key: 'root', // key => what point inside out reducer obj do we wanna start store everything
  storage,
  whitelist: ['cart'], // array contain a string name in any of reducer we wanna store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
