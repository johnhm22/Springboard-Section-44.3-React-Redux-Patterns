import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
// import { v4 as uuidv4} from 'uuid';
import './Shoply.css';
import Cart from './Cart';


const Shoply = () => {
    const dispatch = useDispatch();
    
    const data = useSelector((state) => [...state.shop]);

    console.log("data is: ", data);
    console.log("data[0].products is: ", data[0].products);
    const newData = data[0].products;
    const dataArray = Object.values(newData);
    console.log("dataArray is: ", dataArray);


    const addItem = (ref) => {
        console.log("ref passed in is: ", ref);
        const item = data.filter(product => product[0] === ref)
        console.log("Selected item is: ", item)
        dispatch({ type: 'ADD', payload:item})
    }

// link to :id below needs to be replaced with p.id, for example, when I know how to access the id for the product

    return (
        <>     
            <Container>
                <p>hello</p>
            <Row>
            {dataArray.map(p => (
            <Col xs="3">
                <Card>
                    <CardBody>
                        <p>hello from CardBody</p>
                        <Link to={p.name}>
                        <CardTitle id='product'>{p.name}</CardTitle>    
                        </Link>
                        <CardSubtitle id='ref'>Ref goes here</CardSubtitle>
                        <Button color="success" size="sm" onClick={()=> addItem()}>Add</Button>
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