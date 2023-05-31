import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async(email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async(email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async(token) => {
    const {data} = await $authHost.get('/api/user/auth', {headers: {
        authorization: {token}
    }})
    console.log(data.userRole)
    console.log({token})
    //localStorage.setItem('token', data.token)
    return data.userRole
}

