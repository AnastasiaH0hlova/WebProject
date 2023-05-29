import { makeAutoObservable } from "mobx";

export default class DishStore {
    constructor() {
        this._types = []
        this._dishes = []
        this._ing = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setDishes(dishes) {
        this._dishes = dishes
    }
    setIng(ing) {
        this._ing = ing
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
    get ing() {
        return this._ing
    }
    get selectedType() {
        return this._selectedType
    }
    
}