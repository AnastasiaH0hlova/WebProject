import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import Button from 'react-bootstrap/Button';
import { ADMIN_ROUTE, BASKET_ROUTE, ERROR_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-bootstrap';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} href={SHOP_ROUTE}>Al Halal</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button variant="outline-light" href={ERROR_ROUTE}>Ошибка</Button>
                        <Button variant="outline-light" className='ms-2' href={BASKET_ROUTE}>Корзина</Button>
                        <Button variant="outline-light" className='ms-2' href={ADMIN_ROUTE}>Админ панель</Button>
                        <Button variant="outline-light" className='ms-2' href={LOGIN_ROUTE}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button variant="outline-light" href={LOGIN_ROUTE}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});


export default NavBar;