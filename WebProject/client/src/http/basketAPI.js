import { $host, $authHost } from "./index";

export const addToBasket = async ({dishId, count}) => {
    const { data } = await $authHost.post('api/basket/', {
            dishId, count
        
    })
    return data
}

export const fetchBasketDishes = async () => {
    const { data } = await $authHost.get('api/basket/')
    return data
}

export const deleteOneBasket = async (id) => {
    const { data } = await $authHost.delete('api/basket/'  + id)
    return data
}