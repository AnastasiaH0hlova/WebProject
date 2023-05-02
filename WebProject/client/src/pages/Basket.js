import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';

const Basket = () => {
    const dish = { id: 4, name: "Беляш", description: "Вкусный", weight: 900, calories: 98, cost: 1000, img: "http://chudo-prirody.com/uploads/posts/2021-08/1628905027_100-p-skachat-foto-milikh-kotikov-107.jpg" }
    return (
        <Container className='mt-2'>
            <h1>
                Корзина
            </h1>
            <Card className='bg-light bg-gradient'>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col md={1} >
                        <Image width={100} height={100}  className="rounded" src={dish.img} />
                    </Col>
                    <Col md={3}>
                        <h2>
                            {dish.name}
                        </h2>
                        <h3>
                            Стоимость: {dish.cost}₽
                        </h3>
                    </Col>
                    <Col md={3}>
                        <Form.Control
                            placeholder='Введите количество блюд'
                            type='number'
                        />
                    </Col>
                    <Col md={3}>
                    <Button variant="outline-danger" >Удалить из корзины</Button>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Basket;