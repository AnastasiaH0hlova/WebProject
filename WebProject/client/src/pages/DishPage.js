import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DishPage = () => {
    const {id} = useParams();
    const dish = { id: 1, name: "margarita", description: "first", weight: 100, calories: 450, cost: 1500, img: "https://mobimg.b-cdn.net/v3/fetch/ef/ef5d5a59c4a4d9d1deb9a3722b744951.jpeg?w=1470&r=0.5625" }
    return (
        < Container className='mt-4' >
            <Row>
                <Col md={4}>
                    <Image width={400} height={400} src={dish.img} />
                </Col>
                <Col md={4}>
                    <Card border='light' className='d-flex align-items-center justify-content-center'>
                        <h2>
                            {dish.name}
                        </h2>
                        <h4>{dish.description}</h4>
                        <h4>Вес: {dish.weight}г</h4>
                        <h4>Калории: {dish.calories}ккал</h4>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card border='light' className='d-flex flex-column align-items-center justify-content-around'
                    style={{width:300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}>
                        <h3>
                            {dish.cost}₽
                        </h3>
                        
                        <Button variant='outline-dark' >
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default DishPage;