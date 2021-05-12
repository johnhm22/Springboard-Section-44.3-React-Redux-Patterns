import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button, Card, CardBody, CardTitle} from 'reactstrap';
// import { v4 as uuidv4} from 'uuid';
// import AddItems from './AddItemsForm';
import './Cart.css';


const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => ({...state.cart[0]}));
    
    const products = Object.entries(data);
    console.log("items in cart are: ", products);


    const removeItem = (ref) => {
        console.log("ref to remove: ", ref);
        dispatch({type: 'REMOVE', payload: {ref}})
    }

    return (
        <>     
            <Container className='mt-2'>
            <Row>
            <Card>
            <CardBody>
            <CardTitle>Your shopping cart</CardTitle>
            {products.map(p => (
                <Col xs="3">
                <ul>
                    <li>{p[1].name}</li>
                    {/* <Button color="warning" size="sm" >{p[1]? 'X': 'Y'}</Button> */}
                    <Button color="danger" size="sm" onClick={()=> removeItem(p[0])}>X</Button>

                </ul>
                </Col>
                ))}
            </CardBody>
            </Card>
            </Row>
            </Container>
        </>
    )
}

export default Cart;