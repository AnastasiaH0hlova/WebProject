import { makeAutoObservable } from "mobx";

export default class DishStore {
    constructor() {
        this._types = [
            { id: 1, name: "Пицца" },
            { id: 2, name: "Хинкали" },
            { id: 3, name: "Шашлык" },
            { id: 4, name: "Бургеры" },
            { id: 5, name: "Суши" }
        ]
        this._dishes = [
            {id:1, name: "Маргарита", description: "Вкусная пицца", weight: 100, calories:450, cost:1500, img: "https://mobimg.b-cdn.net/v3/fetch/ef/ef5d5a59c4a4d9d1deb9a3722b744951.jpeg?w=1470&r=0.5625"},
            {id:2, name: "Пепперони", description: "Пицца похуже", weight: 400, calories:560, cost:1900, img: "https://mobimg.b-cdn.net/v3/fetch/c4/c493aac67877288476b0fc52d55f55cf.jpeg"},
            {id:3, name: "Шашлык", description: "Огонь", weight: 900, calories:98, cost:250, img: "https://funik.ru/wp-content/uploads/2018/10/6db3f15d0a21589aaa1b.jpg"},
            {id:4, name: "Беляш", description: "Вкусный", weight: 900, calories:98, cost:1000, img: "http://chudo-prirody.com/uploads/posts/2021-08/1628905027_100-p-skachat-foto-milikh-kotikov-107.jpg"},
            {id:5, name: "Шаверма", description: "Эх в Питер бы", weight: 900, calories:98, cost:1600, img: "https://chudo-prirody.com/uploads/posts/2021-08/1628656362_83-p-foto-kotyat-milikh-i-pushistikh-86.jpg"},
            {id:6, name: "Крем брюле", description: "Классный десерт", weight: 900, calories:98, cost:1800, img: "https://mobimg.b-cdn.net/v3/fetch/dc/dc29767a09c653b617d400d588cac01b.jpeg"},
            {id:7, name: "Борщ", description: "Русский.", weight: 900, calories:98, cost:1450, img: "https://chudo-prirody.com/uploads/posts/2021-08/1628929583_1-p-polosatie-kotyata-foto-1.jpg"},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setDishes(dishes) {
        this._dishes = dishes
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get dishes() {
        return this._dishes
    }
    get selectedType() {
        return this._selectedType
    }
    
}