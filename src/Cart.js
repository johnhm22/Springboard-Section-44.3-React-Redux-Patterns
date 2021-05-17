import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';


const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cart.cartItems);
    const products = useSelector(state => state.shop.products);

    return (
        <>     
        <table className="table table-bordered table-striped">
            <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Quantity</th>
            </tr>
            </thead>
        <tbody>
        {Object.keys(cartData).map(ref => (
            <tr key={ref}>
                <td className="text-center align-middle">{products[ref].name}</td>
                <td className="text-center align-middle">${products[ref].price}</td>
                <td className="text-center align-middle">{cartData[ref]}</td>
            </tr>
              ))}
        </tbody>
      </table>
        </>
    )
}


export default Cart;