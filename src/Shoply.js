import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
// import { v4 as uuidv4} from 'uuid';
// import AddItems from './AddItemsForm';
import './Shoply.css';
import Cart from './Cart';


const Shoply = () => {
    const dispatch = useDispatch();
    // const data = useSelector(store => ({...store[0]['products']}));
    const data = useSelector(state => ({...state.shop[0]['products']}));
    
    const products = Object.entries(data);
    console.log("items in store are: ", products);

    const addItem = (ref) => {
        console.log("ref passed in is: ", ref);
        const item = products.filter(product => product[0] === ref)
        console.log("Selected item is: ", item)
        dispatch({ type: 'ADD', payload:item})
    }



    return (
        <>     
            <Container>
            <Row>
            {products.map(p => (
            <Col xs="4">
            <Card>
                <CardBody>
                    <CardTitle id='product' >{p[1].name}</CardTitle>
                    <CardSubtitle id='ref' >{p[0]}</CardSubtitle>
                    <Button color="success" size="sm" onClick={()=> addItem(p[0])}>Add</Button>
                </CardBody>
            </Card>
            </Col>
            ))}
            </Row>
            <Cart />
            </Container>
           
        </>
    )
}

export default Shoply;