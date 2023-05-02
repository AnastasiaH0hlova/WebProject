import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DishPage from "./pages/DishPage"
import Shop from "./pages/Shop"
import ErrorPage from "./pages/ErrorPage"
import { ADMIN_ROUTE, BASKET_ROUTE, DISH_ROUTE, ERROR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }, 
    {
        path: DISH_ROUTE,
        Component: DishPage
    }, 
    {
        path: DISH_ROUTE + '/:id',
        Component: DishPage
    },
    {
        path: BASKET_ROUTE,
        Component: ErrorPage
    }
]