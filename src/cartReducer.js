import { useSelector } from "react-redux";


const INITIAL_STATE = {
    cartItems:{"b04b779c-1cfb-48a7-8424-25a8c7e608ae": 1}
};


function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD':{
            const cartCopy = { ...state.cartItems };
            cartCopy[action.itemRef] = (cartCopy[action.itemRef] || 0) + 1;
            return {cartItems: cartCopy};
       }
        case 'REMOVE': {
            const cartCopy = { ...state.cartItems };
            if (!cartCopy[action.itemRef]) return state;
            cartCopy[action.itemRef]--;
            if (cartCopy[action.itemRef] === 0) {
              delete cartCopy[action.itemRef];
            }
            return {cartItems: cartCopy}
        }

        default:{
            return state; 
            }   
    }
}

export default cartReducer;