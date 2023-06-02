import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BasketItem from '../components/BasketItem';
import { Context } from '..';
import { fetchBasketDishes } from '../http/basketAPI';

const Basket = () => {
    const { basket } = useContext(Context)
    useEffect(() => {
        fetchBasketDishes()
        .then(data => basket.setBasket(data))
        .catch(error => alert(error.message))
        
    }, [])
    
    useEffect(() => {
        fetchBasketDishes()
        .then(data => basket.setBasket(data))
        .catch(error => alert(error.message))
        
    }, [basket.basketDish])
    
//<BasketItem key={basket.id} basket={basket} />
    return (
        <Container className='mt-2'>
            <h1>
                Корзина
            </h1>
            {basket.basket?.map(baskets =>
                <BasketItem key={baskets.id} basket={baskets} />
            )
            }
        </Container>
    )
}

export default Basket;