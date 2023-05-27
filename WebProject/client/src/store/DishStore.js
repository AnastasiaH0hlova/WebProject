import { makeAutoObservable } from "mobx";

export default class DishStore {
    constructor() {
        this._types = []
        this._dishes = []
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