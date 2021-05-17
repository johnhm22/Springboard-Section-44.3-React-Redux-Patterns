import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button, Card, CardBody, CardTitle} from 'reactstrap';
import './Shoply.css';
import Cart from './Cart';


const Shoply = () => {
    const dispatch = useDispatch();
    
    const data = useSelector(state => state.shop.products);


    const addItem = (ref) => {
        for(let p in data){
            if(p === ref){
                dispatch({type: 'ADD', itemRef: ref})
            }
        }
        }

    const removeItem = (ref) => {
        dispatch({type: 'REMOVE', itemRef: ref})
    }
    

    return (
        <>     
            <Container>
                <Row>
                {Object.keys(data).map(ref => (
          <Col xs="3">
              <Card>
                  <CardBody>
                      <Link to={ref}>
                      <CardTitle id='product'>{data[ref].name}</CardTitle>    
                      </Link>
                      <Button color="success" size="sm" onClick={()=> addItem(ref)}>Add</Button>
                      <Button color="danger" size="sm" onClick={()=> removeItem(ref)}>Remove</Button>
                  </CardBody>
              </Card>
               </Col>
                ))}  
          </Row>
          <Row>
              <Col xs="6">
          <Cart />
          </Col>
          </Row>
            </Container>
        </>
    )
                }

export default Shoply;