import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useInRouterContext, useNavigate, useParams } from 'react-router-dom';
import { deleteOneDish, fetchOneDish } from '../http/dishAPI';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';

const DishPage = () => {
    const { id } = useParams();

    const {user} = useContext(Context)

    const [dish1, setDish] = useState({ info: [] })
    const navigate = useNavigate()
    const { dish } = useContext(Context)

    useEffect(() => {
        fetchOneDish(id).then(data => setDish(data))
    }, [])

    const clickDelete = () => {
        try {
            deleteOneDish(id).then(navigate(SHOP_ROUTE))

        } catch (e) {
            alert(e.response.data.message)
        }
    }
    //{dish.dish_info[0].name} сделать фором перебор ингеридентов (проверка на существование массива!)
    return (
        < Container className='mt-4' >
            <Row>
                <Col md={4}>
                    <Image width={400} height={400} className="rounded" src={process.env.REACT_APP_API_URL + dish1.photo} />
                </Col>
                <Col md={4}>
                    <Card border='light' className='d-flex align-items-center justify-content-center'>
                        <h2>
                            {dish1.name}
                        </h2>
                        <h4>{dish1.description}</h4>
                        <p className='mt-2'>Вес: {dish1.weight}г</p>
                        <p>Калории: {dish1.calories}ккал</p>
                    </Card>
                    <Card border='light' className='mt-3'>
                        Ингредиенты:
                        {dish1.dish_info?.map(dish_info => <div key={Math.random() + '' + Math.random()}>{dish_info.name}</div>)}

                    </Card>
                </Col>
                <Col md={4}>
                    <Card border='light' className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey' }}>
                        <h3>
                            {dish1.cost}₽

                        </h3>

                        <Button variant='outline-dark' >
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='md-4 mt-4' border='danger'>
                    {user.role && user.role === 'ADMIN' && (<Button classname = 'bg-danger bg-gradient' onClick={() => clickDelete()}>Удалить блюдо</Button>)}
                </Col>
            </Row>
        </Container >
    )
}

export default DishPage;