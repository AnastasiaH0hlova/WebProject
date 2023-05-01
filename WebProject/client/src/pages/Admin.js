import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateDish from '../components/modals/CreateDish';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [dishVisible, setDishVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant="outline-info" className='mt-3 p-2' onClick={()=>setTypeVisible(true)}>Добавить тип блюда</Button>
            <Button variant="outline-info" className='mt-3' onClick={()=>setDishVisible(true)}>Добавить блюдо</Button>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)} />
            <CreateDish show={dishVisible} onHide={()=>setDishVisible(false)} />
        </Container>
    )
}

export default Admin;