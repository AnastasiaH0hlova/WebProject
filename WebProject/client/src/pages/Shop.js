import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
        /*fetchDishes(null, 1, 5).then(data => {
            dish.setDishes(data.rows)
            dish.setTotalCount(data.count)
        })*/
    }, [])

    console.log(dish.selectedType.id, dish.totalCount)

    useEffect(() => {
        fetchDishes(dish.selectedType.id, dish.page, 3).then(data => {
            dish.setDishes(data.rows)
            dish.setTotalCount(data.count)
        })
    }, [ dish.page, dish.selectedType])

    return (
        <Container>
            <Row className='mt-2' >
                <Col md={3}>
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