import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createDish, fetchDishes, fetchType } from '../../http/dishAPI';

const CreateDish = observer(({ show, onHide }) => {
    const { dish } = useContext(Context)
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [weight, setWeight] = useState(0)
    const [ccal, setCcal] = useState(0)
    const [cost, setCost] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetchType().then(data=>dish.setTypes(data))
        fetchDishes().then(data=>dish.setDishes(data.rows))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const addDish =()=>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('weight', `${weight}`)
        formData.append('calories', `${ccal}`)
        formData.append('cost', `${cost}`)
        formData.append('photo', file)
        formData.append('typeId', dish.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDish(formData).then(data => onHide())
    }
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
                        <Dropdown.Toggle>{ dish.selectedType.name ||"Выберите тип блюда"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {dish.types.map(type =>
                                <Dropdown.Item onClick={()=>dish.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название блюда'
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className='mt-3'
                        placeholder='Введите описание блюда'
                    />
                    <Form.Control
                        value={weight}
                        onChange={e => setWeight(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите вес блюда'
                        type='number'
                    />
                    <Form.Control
                        value={ccal}
                        onChange={e => setCcal(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите калорийность блюда'
                        type='number'
                    />
                    <Form.Control
                        value={cost}
                        onChange={e => setCost(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите цену блюда'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDish}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDish;