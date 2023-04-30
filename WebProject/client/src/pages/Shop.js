import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import ListDish from '../components/ListDish';

const Shop = () => {
    return (
        <Container>
            SHOP
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <ListDish />
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;