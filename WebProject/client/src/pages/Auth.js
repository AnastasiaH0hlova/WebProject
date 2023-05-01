import React from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    //console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите ваш password..."
                    />
                    <Form className='d-flex justify-content-between mt-3 '>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>

                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button
                            variant="outline-info">{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
                    </Form>
                </Form>
            </Card>
        </Container>

    )
}

export default Auth;