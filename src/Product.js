import React from 'react';
import {useParams, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText} from 'reactstrap';
// import { v4 as uuidv4} from 'uuid';
import './Shoply.css';



const Product = () => {
    const dispatch = useDispatch();

    const {name} = useParams();
    console.log(name);

    //useSelector will be used to retrieve product data and then filterd according to id from useParams
    const data = useSelector((state) => [...state.shop]);
    const newData = data[0].products;
    const dataArray = Object.values(newData);
    
 
    let item = dataArray.find(product => product.name === name);
    console.log("item in product details is: ", item)
    if (!name) return <Redirect to={'/'} />;

    const addItem = (item) => {
        dispatch({ type: 'ADD', payload:item})
    }

    return (
        <>     
            <Container>
                <p>hello</p>
            <Row>
            <Col xs="3">
                <Card>
                <CardImg top width="100%" src={item.image_url} alt="Product image" />
                    <CardBody>
                        <p>hello from CardBody</p>
                        <CardTitle id='product'>{item.name}</CardTitle>  
                        <CardSubtitle id='ref'>Ref goes here</CardSubtitle>
                        <CardText>
                            {item.description}
                            Price: {item.price}
                        </CardText>
                        <Button color="success" size="sm" onClick={()=> addItem(item)}>Add</Button>
                    </CardBody>
                </Card>
                 </Col>
            </Row>
            </Container>
        </>
    )
}

export default Product;