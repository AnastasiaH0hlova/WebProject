import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import ListDish from '../components/ListDish';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchDishes, fetchType } from '../http/dishAPI';

const Shop = observer(() => {
    const {dish} = useContext(Context)

    useEffect(()=>{
        fetchType().then(data=>dish.setTypes(data))
        fetchDishes().then(data=>dish.setDishes(data.rows))
    }, [])

    return (
        <Container>
            <Row className='mt-2' >
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <ListDish />
                </Col>
            </Row>
        </Container>
    )
});

export default Shop;