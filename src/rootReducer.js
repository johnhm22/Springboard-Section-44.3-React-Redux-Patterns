import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import shopReducer from './shopReducer';


const rootReducer = combineReducers({cart: cartReducer, shop: shopReducer})


export default rootReducer;