import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDish } from '../http/dishAPI';

const DishPage = () => {
    const {id} = useParams();
    const [dish, setDish] = useState({ info: [] })

    useEffect(() => {
        fetchOneDish(id).then(data=>setDish(data))
    }, [])
    console.log({dish})
    //{dish.dish_info[0].name} сделать фором перебор ингеридентов (проверка на существование массива!)
    return (
        < Container className='mt-4' >
            <Row>
                <Col md={4}>
                    <Image width={400} height={400} className="rounded" src={process.env.REACT_APP_API_URL + dish.img} />
                </Col>
                <Col md={4}>
                    <Card border='light' className='d-flex align-items-center justify-content-center'>
                        <h2>
                            {dish.name}
                        </h2>
                        <h4>{dish.description}</h4>
                        <p className='mt-2'>Вес: {dish.weight}г</p>
                        <p>Калории: {dish.calories}ккал</p>
                    </Card>
                    <Card>
                        Ингредиенты: 
                        
                    </Card>
                </Col>
                <Col md={4}>
                    <Card border='light' className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey' }}>
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