import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shop: shopReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
