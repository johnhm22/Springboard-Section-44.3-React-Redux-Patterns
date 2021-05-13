import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';
// import { v4 as uuidv4} from 'uuid';
// import AddItems from './AddItemsForm';
import './Cart.css';


const Cart = () => {
    const dispatch = useDispatch();
    // const data = useSelector(state => ({...state.cart[0]}));
    const cartData = useSelector((state) => [...state.cart]);
    
    console.log("cartData is: ", cartData);
    console.log("cartData[0] is: ", cartData[0]);
    const newCartData = cartData[0];
    const cartDataArray = Object.values(newCartData);
    console.log("cartDataArray is: ", cartDataArray);

    // const products = Object.entries(data);
    // console.log("items in cart are: ", products);

    // const ref = Object.keys(p)[0];
    // const data = Object.values(p)[0];

    const removeItem = (ref) => {
        console.log("ref to remove: ", ref);
        dispatch({type: 'REMOVE', payload: {ref}})
    }

    return (
        <>     
            <Container className='mt-2'>
            <Row>
            {cartDataArray.map(p => (
            <Col xs="3">
            <Card id="cart_card">
            <CardBody>
            <CardTitle>Your shopping cart</CardTitle>
                <ul>
                    <li>Product: {p.name}</li>
                    <span id="remove"
                        onClick={()=> removeItem()}>
                        x
                    </span>
                </ul>
            </CardBody>
            </Card>
            </Col>
             ))}
            </Row>
            </Container>
        </>
    )
}

export default Cart;