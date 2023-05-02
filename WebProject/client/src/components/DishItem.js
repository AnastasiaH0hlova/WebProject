import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DISH_ROUTE } from '../utils/consts';

const DishItem = ({ dish }) => {
    const navigate = useNavigate() 
    //console.log(navigate)
    return (
        <Col md={3} className='mt-3' onClick={()=>navigate(`${DISH_ROUTE}/${dish.id}`)}>
            <Card style={{ width: 200, cursor: 'pointer' }} border={'light'}>
                <Image width={200} height={200}  className="rounded" src={dish.img} />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        {dish.name}
                    </div>
                    <div>
                        {dish.cost}₽
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DishItem;