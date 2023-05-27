import React from 'react';
import { Container } from 'react-bootstrap';
import BasketItem from '../components/BasketItem';

const Basket = () => {
    return (
        <Container className='mt-2'>
            <h1>
                Корзина
            </h1>
            <BasketItem />
            <BasketItem />
            <BasketItem />
        </Container>
    )
}

export default Basket;