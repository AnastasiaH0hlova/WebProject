import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { BASKET_ROUTE, ERROR_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';
import Basket from '../pages/Basket';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import ErrorPage from '../pages/ErrorPage';
import Shop from '../pages/Shop';
import DishPage from '../pages/DishPage';

const AppRouter = () => {
    const { user } = useContext(Context)

    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )
            }
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )
            }
            < Route path='*' element={<Navigate to={SHOP_ROUTE} />} />

        </Routes>
    );
};

export default AppRouter;