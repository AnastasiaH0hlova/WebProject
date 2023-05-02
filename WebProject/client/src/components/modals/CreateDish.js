import React, { useContext, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';

const CreateDish = ({show, onHide}) => {
    const { dish } = useContext(Context)
    const [info, setInfo] = useState([])
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить блюдо
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Выберите тип блюда</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {dish.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                    className='mt-3'
                    placeholder='Введите название блюда'
                    />
                    <Form.Control 
                    className='mt-3'
                    placeholder='Введите описание блюда'
                    />
                    <Form.Control 
                    className='mt-3'
                    placeholder='Введите вес блюда'
                    type='number'
                    />
                    <Form.Control 
                    className='mt-3'
                    placeholder='Введите калорийность блюда'
                    type='number'
                    />
                    <Form.Control 
                    className='mt-3'
                    placeholder='Введите цену блюда'
                    type='number'
                    />
                    <Form.Control 
                    className='mt-3'
                    type='file'
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDish;