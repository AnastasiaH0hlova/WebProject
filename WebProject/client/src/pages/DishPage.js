import React from 'react';
import { Button, Card, Col, Container,  Image, Row } from 'react-bootstrap';
//import { useParams } from 'react-router-dom';

const DishPage = () => {
    //const {id} = useParams();
    const dish =  {id:4, name: "Беляш", description: "Вкусный", weight: 900, calories:98, cost:1000, img: "http://chudo-prirody.com/uploads/posts/2021-08/1628905027_100-p-skachat-foto-milikh-kotikov-107.jpg"}
    return (
        < Container className='mt-4' >
            <Row>
                <Col md={4}>
                    <Image width={400} height={400} className="rounded" src={dish.img} />
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