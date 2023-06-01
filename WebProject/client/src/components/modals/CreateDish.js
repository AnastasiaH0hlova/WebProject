import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createDish, fetchDishes, fetchOneDish, fetchType } from '../../http/dishAPI';

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

    
    useEffect(() => {
        fetchType().then(data => dish.setTypes(data))
        fetchDishes().then(data => dish.setDishes(data.rows))
    }, [])
 console.log(dish.dish_info)
    const selectFile = e => {
        setFile(e.target.files[0])
    }


    const addDish = () => {
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
                        <Dropdown.Toggle>{dish.selectedType.name || "Выберите тип блюда"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {dish.types.map(type =>
                                <Dropdown.Item onClick={() => dish.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
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
                        onChange={e => setWeight((e.target.value))}
                        className='mt-3'
                        placeholder='Введите вес блюда'

                    />
                    <Form.Control
                        value={ccal}
                        onChange={e => setCcal(e.target.value)}
                        className='mt-3'
                        placeholder='Введите калорийность блюда'
                    />
                    <Form.Control
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                        className='mt-3'
                        placeholder='Введите цену блюда'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />

                    <Form.Control as="select" multiple value={dish.ing}>
                        {dish.ing?.map(ing => 
                            <option key={ing.id} value={ing.name}>
                                {ing.name}
                            </option>
                        )}
                        {dish.dish_info?.map(dish_info => <div key={Math.random() + '' + Math.random()}>{dish_info.name}</div>)}

                    </Form.Control>
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