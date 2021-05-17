import React from 'react';
import {useParams, Redirect, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText} from 'reactstrap';
import './Shoply.css';



const Product = () => {
    const dispatch = useDispatch();

    const {id} = useParams();

    const data = useSelector(state => state.shop);
    console.log("data in product: ", data);
    const newData = data.products;
    const dataArray = Object.values(newData);
    const dataRef = Object.keys(newData);
    
    
 
    let item = dataRef.find(product => product === id);
    console.log("item in product details is: ", item)
    if (!id) return <Redirect to={'/'} />;

    let product = data.products[item];

    return (
        <>     
            <Container>
                <Link to='/'>Back to products</Link>
            <Row>
            <Col xs="3">
                <Card>
                <CardImg top width="100%" src={product.image_url} alt="Product image" />
                    <CardBody>
                        <CardTitle id='product'>{product.name}</CardTitle>  
                        <CardText>
                            <div>{product.description}</div>
                            <div>Price: {product.price}</div>
                        </CardText>
                        {/* <Button color="success" size="sm" onClick={()=> addItem()}>Add</Button> */}
                    </CardBody>
                </Card>
                 </Col>
            </Row>
            </Container>
        </>
    )
}

export default Product;