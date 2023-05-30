import {$host, $authHost} from "./index";

export const createType = async(type) => {
    const {data} = await $authHost.post('api/type_dish', type)
    return data
}

export const fetchType = async() => {
    const {data} = await $host.get('api/type_dish')
    return data
}   
export const createDish = async(dish) => {
    const {data} = await $authHost.post('api/dish', dish)
    return data
}

export const fetchDishes = async(typeId, page, limit = 5) => {
    const {data} = await $host.get('api/dish', {params: {
        typeId, page, limit
    }})
    console.log(data)
    return data
} 

export const fetchOneDish = async(id) => {
    const {data} = await $host.get('api/dish/'+id)
    //console.log(data)
    return data
}     
