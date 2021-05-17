import { useSelector } from "react-redux";


const INITIAL_STATE = {
    cartItems:{"b04b779c-1cfb-48a7-8424-25a8c7e608ae": 1}
};


function cartReducer(state = INITIAL_STATE, action) {
    console.log("action in cartReducer: ", action)
    switch (action.type) {
        case 'ADD':{
            const cartCopy = { ...state.cartItems };
            console.log("action.itemRef is: ", action.itemRef);
            cartCopy[action.itemRef] = (cartCopy[action.itemRef] || 0) + 1;
            console.log("cartCopy is: ", cartCopy)
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