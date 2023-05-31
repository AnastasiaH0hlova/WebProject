import React, { useContext, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import ListDish from '../components/ListDish';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchDishes, fetchType } from '../http/dishAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const { dish } = useContext(Context)

    useEffect(() => {
        fetchType().then(data => dish.setTypes(data))
        
    }, [])

    //console.log(dish.selectedType.id, dish.totalCount)

    useEffect(() => {
        fetchDishes(dish.selectedType.id, dish.page, 3).then(data => {
            dish.setDishes(data.rows)
            dish.setTotalCount(data.count)
        })
    }, [ dish.page, dish.selectedType])

    const watchAllDishes= () => {
        dish.setSelectedType(false)
        
    }

    return (
        <Container>
            <Row className='mt-2' >
                <Col md={3}>
                    <Button variant="outline-dark" className='ms-2' onClick={() => watchAllDishes()}>
                        Все блюда
                    </Button>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <ListDish />
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
});

export default Shop;