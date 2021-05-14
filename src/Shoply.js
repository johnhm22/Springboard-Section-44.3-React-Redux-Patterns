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
    const dataRef = Object.keys(newData);
    console.log("dataArray is: ", dataArray);
    console.log("dataRef is: ", dataRef);

    console.log("keys in data are: ", Object.keys(data));




    const addItem = (ref) => {
        console.log("ref passed in is: ", ref);
        // const item = Object.keys(data[0].products);
        // console.log("item is: ", item);
        for(let p in data[0].products){
            console.log("p from for in is: ", p);
            if(p === ref){
                console.log("data[0].products[p] is: ", {p: data[0].products[ref]});
                // dispatch({type: 'ADD', payload: p})
            }
        }



        // const item = data[0].products.filter(product => Object.keys(data[0].products === ref)
        // console.log("Selected item is: ", item)
        // dispatch({ type: 'ADD', payload:item})
    }

// link to :id below needs to be replaced with p.id, for example, when I know how to access the id for the product

    return (
        <>     
            <Container>
                <p>hello</p>
            <Row>
            {dataArray.map((p, idx) => (
            <Col xs="3">
                <Card>
                    <CardBody>
                        <Link to={dataRef[idx]}>
                        <CardTitle id='product'>{p.name}</CardTitle>    
                        </Link>
                        
                        <CardSubtitle id='ref'>{dataRef[idx]}</CardSubtitle>
                        <Button color="success" size="sm" onClick={()=> addItem(dataRef[idx])}>Add</Button>
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