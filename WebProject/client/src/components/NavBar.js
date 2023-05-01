import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import Button from 'react-bootstrap/Button';
import {  useLocation, useNavigate } from 'react-router';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    //const navigate = useNavigate()
   // onClick={()=>navigate(ADMIN_ROUTE)
//    const location = useLocation()
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button variant="outline-light" >Админ панель</Button>
                        <Button variant="outline-light" className='ms-2' >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button variant="outline-light">Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});


export default NavBar;