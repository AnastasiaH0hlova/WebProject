import {$host, $authHost} from "./index";

export const addToBasket = async (name, count) => {
    const { data } = await $authHost.post('api/basket/', {
        params: {
            name, count
        }
    })
    console.log(data)
    return data
}

export const fetchBasketDishes = async () => {
    const { data } = await $authHost.get('api/basket/')
    return data
}