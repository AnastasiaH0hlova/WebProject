import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateDish from '../components/modals/CreateDish';

const Admin = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button variant="outline-info" className='mt-3 p-2'>Добавить тип блюда</Button>
            <Button variant="outline-info" className='mt-3'>Добавить блюдо</Button>
            <CreateType show={true} />
        </Container>
    )
}

export default Admin;