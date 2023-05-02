import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Error = ({ show, onHide }) => {
    
    //const [errorVisible, setErrorVisible] = useState(false)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ошибка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Введенное блюдо уже существует</h4>
                <p>
                    К сожалению, блюдо с введенным названием уже существует! Попробуйте создать новое блюдо с другим названием!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Error;