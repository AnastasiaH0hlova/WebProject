import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BasketItem from '../components/BasketItem';
import { Context } from '..';
import { fetchBasketDishes } from '../http/basketAPI';

const Basket = () => {
    const { basket } = useContext(Context)

    useEffect(() => {
        fetchBasketDishes().then(data => basket.setBasket(data))
        
    }, [])


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