import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Row } from 'react-bootstrap';
import DishItem from './DishItem';
import { Context } from '..';

const ListDish = observer(() => {
    const { dish } = useContext(Context)
    return (
        <Row className='d-flex'>
            {dish.dishes.map(dish =>
                <DishItem key={dish.id} dish={dish} />
            )
            }
        </Row>
    );
});
export default ListDish;