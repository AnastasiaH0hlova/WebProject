import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { deleteOneBasket } from '../http/basketAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOneDish } from '../http/dishAPI';
import { SHOP_ROUTE } from '../utils/consts';

const BasketItem = ({ basket }) => {
    const [dish, setDish] = useState({ info: [] })
    const navigate = useNavigate()
    useEffect(() => {
        fetchOneDish(basket.dishId).then(data => setDish(data))
    }, [])
    const id = basket.dishId
    console.log(id)
    const clickDelete = () => {
        try {
            deleteOneBasket( basket.dishId)
            .then(navigate(SHOP_ROUTE))
            .catch((error) => alert(error.message))
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Card className='bg-light bg-gradient mt-2'>
            <Row className='d-flex justify-content-between align-items-center'>
                <Col md={1}></Col>
                <Col md={1} >
                    <Image width={100} height={100} className="rounded" src={process.env.REACT_APP_API_URL + dish.photo} />
                </Col>
                <Col md={3}>
                    <h2>
                        {dish.name}
                    </h2>
                    <h3>
                        Стоимость: {dish.cost * basket.count}₽
                    </h3>
                </Col>
                <Col md={3}>
                    <Button variant="outline-danger" onClick={() => clickDelete()}>Удалить из корзины</Button>
                </Col>
            </Row>
        </Card>
    );
};

export default BasketItem;